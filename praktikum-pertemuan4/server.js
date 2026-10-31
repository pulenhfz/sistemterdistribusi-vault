import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3000;

app.use(express.json());

// ====================== REST API ======================
app.get('/api/users', (req, res) => {
    res.json({
        status: 'success',
        data: [
            { id: 1, name: 'Budi' },
            { id: 2, name: 'Siti' }
        ]
    });
});

app.post('/api/users', (req, res) => {
    const newUser = req.body;
    res.status(201).json({
        status: 'success',
        message: 'User berhasil ditambahkan',
        data: newUser
    });
});

// 2. Socket.IO
io.on('connection', (socket) => {
    console.log(`User terhubung dengan socket id: ${socket.id}`);

    socket.on('chat_message', (msg) => {
        console.log(`Pesan diterima dari ${socket.id}: ${msg}`);

        let reply = "";
        const lowerMsg = msg.toLowerCase();

        if (lowerMsg.includes("nama")) {
            reply = "Nama saya adalah Bot Chat.";
        } else if (lowerMsg.includes("alamat")) {
            reply = "Saya tinggal di dalam Server Node.js.";
        } else if (lowerMsg.includes("kelas")) {
            reply = "Saya berada di kelas Pemrograman Jaringan.";
        } else {
            reply = "Maaf, saya tidak mengerti.";
        }

        socket.emit('chat_reply', `Bot: ${reply}`);
    });

    socket.on('disconnect', () => {
        console.log(`User ${socket.id} terputus`);
    });
});

// 3. RPC
const procedures = {
    add: (a, b) => a + b,
    multiply: (a, b) => a * b
};

app.post('/rpc', (req, res) => {
    const { procedure, args } = req.body;

    if (procedures[procedure]) {
        try {
            const result = procedures[procedure](...args);
            res.json({ result });
        } catch (error) {
            res.status(500).json({ error: 'Gagal mengeksekusi prosedur' });
        }
    } else {
        res.status(404).json({ error: `Prosedur '${procedure}' tidak ditemukan` });
    }
});

server.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
    console.log(`REST API, Socket.IO, dan RPC siap menerima koneksi.`);
});