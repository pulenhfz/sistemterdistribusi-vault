import { io } from 'socket.io-client';
import readline from 'readline';

// Make it flexible
// - Default: localhost
// - For 2 laptops: node client.js http://IP_SERVER:3000
// - Bare IP also works (scheme + port added automatically):
//   node client.js 10.36.60.5
let SERVER_URL = process.argv[2] || 'localhost';
SERVER_URL = SERVER_URL.trim();

// Tambahkan skema http:// jika belum ada
if (!/^https?:\/\//i.test(SERVER_URL)) {
    SERVER_URL = 'http://' + SERVER_URL;
}

// Tambahkan port default 3000 jika belum ada
try {
    const u = new URL(SERVER_URL);
    if (!u.port) {
        u.port = '3000';
    }
    SERVER_URL = u.toString().replace(/\/$/, '');
} catch {
    // Biarkan tetap sebagai string jika tidak valid
}

//1. Pengujian REST API (GET dan POST)
async function testREST() {
    console.log('\n--- Menguji REST API ---');

    //Test GET request
    try {
        const getRes = await fetch(`${SERVER_URL}/api/users`);
        const getData = await getRes.json();
        console.log('GET /api/users Response:', getData);
    } catch (e) {
        console.error('GET error:', e.message);
    }

    //Test POST request
    try {
        const postRes = await fetch(`${SERVER_URL}/api/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: 3, name: 'Andi' })
        });
        const postData = await postRes.json();
        console.log('POST /api/users Response:', postData);
    } catch (e) {
        console.error('POST error:', e.message);
    }
}

//2. Pengujian RPC (Remote Procedure Call)
async function testRPC() {
    console.log('\n--- Menguji RPC (Remote Procedure Call) ---');

    try {
        const res = await fetch(`${SERVER_URL}/rpc`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ procedure: 'multiply', args: [5, 4] })
        });
        const data = await res.json();
        console.log('RPC result for multiply(5, 4):', data.result);
    } catch (e) {
        console.error('RPC error:', e.message);
    }

    // Eksperimen Langkah 7 #1: uji prosedur power(2, 3)
    try {
        const res = await fetch(`${SERVER_URL}/rpc`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ procedure: 'power', args: [2, 3] })
        });
        const data = await res.json();
        console.log('RPC result for power(2, 3):', data.result);
    } catch (e) {
        console.error('RPC power error:', e.message);
    }
}

//3. Pengujian Socket.io chat Interaktif
function testSocket() {
    console.log('\n--- Menguji Socket.io (Chat Interaktif) ---');
    console.log('Ketik pertanyaan Anda (misal: "Siapa nama kamu?", "Dimana alamat kamu?"). Ketik "exit" untuk keluar.');
     const socket = io(SERVER_URL);

    //Konfigurasi modul readline untuk membaca input dari keyboard
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    //Dipakai agar promptInput() tidak dipanggil setelah readline ditutup
    let rlClosed = false;
    rl.on('close', () => {
        rlClosed = true;
        socket.disconnect();   //Tutup socket juga (mis. Ctrl+C / EOF) agar proses bisa keluar
    });

      socket.on('connect', () => {
        console.log(`\n[Socket] Berhasil terhubung ke server. (ID: ${socket.id})`);
        promptInput();
     });
     //Mendengarkan respon balasan dari server
     socket.on('chat_reply', (msg) => {
        console.log(`${msg}`);
        promptInput();
     });

    //Menangani error koneksi socket
    socket.on('connect_error', (err) =>{
        console.error('[Socket] Gagal terhubung:', err.message);
        rl.close();
    });

    //Fungsi loop input terminal
    function promptInput(){
        if (rlClosed) return;   //Jangan tanya lagi jika input sudah ditutup (mis. "exit" / Ctrl+C)
        rl.question('Anda: ', (input) =>{
            if (input.trim().toLowerCase() === 'exit') {
                console.log('Memutuskan koneksi socket...');
                socket.disconnect();
                rl.close();
            } else {
                //Mengirim pesan ke server lewat event 'chat_message'
                socket.emit('chat_message', input);
            }
        });
    }
}

//Menjalankan semua pengujian secara berurutan
async function runAll() {
    await testREST();
    await testRPC();
    testSocket();
}

runAll();