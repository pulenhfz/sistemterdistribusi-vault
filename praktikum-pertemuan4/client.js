import { io } from 'socket.io-client';
import readline from 'readline';

// Make it flexible
// - Default: localhost
// - For 2 laptops: node client.js http://IP_SERVER:3000
const SERVER_URL = process.argv[2] || 'http://localhost:3000';

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
        console.error('POST error:', e);
    }
}

//2. Pengujian RPC (Remote Procedure Call)
async function test() {
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
}

//3. Pengujian Socket.io chat Interaktif
function testSocket() {
    console.log('\n--- Menguji Socket.io (Chat Interaktif) ---');
    console.log('Ketik pertanyaan anda (misal: "Siapa nama kamu?", "Dimana alamat kamu?"). Ketik "exit" untuk untuk keluar.');
     const socket = io(SERVER_URL);

    //Konfigurasi modul readline untuk membaca input dari keyboard
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
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
    await test();
    testSocket();
}

runAll();