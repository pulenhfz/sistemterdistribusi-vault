# Pertemuan 4 — Express + Socket.IO + RPC

Implementasi tiga pola komunikasi dalam satu server: REST API (Express), chat realtime (Socket.IO), dan remote procedure call (RPC).

## Menjalankan

> Prasyarat: Node.js ≥ 18, npm.

Masuk folder dan install dependensi:

```bash
cd pertemuan-4
npm install
```

**Terminal 1 — jalankan server:**

```bash
node server.js
```

Server berjalan di `http://localhost:3000`.

**Terminal 2 — jalankan client:**

```bash
node client.js
```

Untuk client dari laptop lain, beri argumen alamat server:

```bash
node client.js http://IP_SERVER:3000
```

Client otomatis menjalankan test REST, RPC, lalu masuk ke chat interaktif. Ketik pertanyaan, atau `exit` untuk keluar.

**Uji manual di browser:** buka <http://localhost:3000/api/users>.

## Endpoint & Event

| Endpoint / Event | Method | Fungsi |
| --- | --- | --- |
| `/api/users` | GET | ambil daftar user |
| `/api/users` | POST | tambah user (body JSON `{ id, name }`) |
| `/rpc` | POST | panggil prosedur `add` / `multiply` |
| `chat_message` | Socket.IO | kirim pesan ke server |
| `chat_reply` | Socket.IO | jawaban bot dari server |

## Struktur

- `server.js` — server Express + Socket.IO + RPC
- `client.js` — klien test REST, RPC, dan chat interaktif
