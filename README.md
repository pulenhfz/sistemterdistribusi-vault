# Sistem Terdistribusi

_Arsip praktikum mata kuliah Sistem Terdistribusi — dari dasar Node.js sampai komunikasi realtime berbasis Socket.IO._

[![Node.js](https://img.shields.io/badge/node.js-%23ffffff.svg?style=for-the-badge&logo=node.js&logoColor=339933)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/express.js-%23ffffff.svg?style=for-the-badge&logo=express&logoColor=000000)](https://expressjs.com/)
[![Socket.IO](https://img.shields.io/badge/socket.io-%23ffffff.svg?style=for-the-badge&logo=socketdotio&logoColor=010101)](https://socket.io/)

[Struktur](#struktur-repo) • [Prasyarat](#prasyarat) • [Menjalankan](#menjalankan) • [Teknologi](#teknologi) • [Kontributor](#kontributor) • [Lisensi](#lisensi)

---

## Tentang

Repositori ini berisi kumpulan hasil praktikum **Sistem Terdistribusi** (Semester 5). Setiap pertemuan disimpan dalam folder terpisah agar mudah ditelusuri. Seluruh istilah dan output menggunakan Bahasa Indonesia.

Untuk penjelasan visual, lihat file demo yang berada di luar repo (video `Prak3.mp4`, `Desain tanpa judul.mp4`).

## Struktur Repo

| Folder | Materi | Isi |
| --- | --- | --- |
| [`pertemuan-1/`](pertemuan-1) | Dasar JavaScript & Node.js | input/output, percabangan, perulangan, latihan (kalkulator, kasir, bilangan prima) |
| [`pertemuan-2/`](pertemuan-2) | Fungsi & Async | function dasar, arrow function, callback, async callback, async/await + 3 tugas |
| [`pertemuan-3/`](pertemuan-3) | HTTP Server | simulasi HTTP status code (1xx–5xx) dengan modul bawaan `node:http` |
| [`pertemuan-4/`](pertemuan-4) | Express + Socket.IO + RPC | REST API, chat realtime, remote procedure call |

## Prasyarat

- **Node.js ≥ 18** (kode memakai `fetch` native, `res.writeProcessing()`, dan ESM `import`)
- **npm** (untuk folder yang memiliki `package.json`)

> Lokal diuji pada Node.js v24.15.0.

## Menjalankan

### Pertemuan 1 — Dasar JavaScript

Tanpa dependensi. Pilih file yang mau dijalankan:

```bash
node pertemuan-1/hello.js
node pertemuan-1/input_output.js
node pertemuan-1/percabangan.js
node pertemuan-1/perulangan.js
node pertemuan-1/latihan1_kalkulator.js
node pertemuan-1/latihan2_kasir.js
node pertemuan-1/latihan3_prima.js
node pertemuan-1/latihan.js
```

### Pertemuan 2 — Fungsi & Async

```bash
node pertemuan-2/01_function_dasar.js
node pertemuan-2/02_arrow_function.js
node pertemuan-2/03_callback.js
node pertemuan-2/04_async_callback.js
node pertemuan-2/05_async_await_readline.js
node pertemuan-2/tugas1.js
node pertemuan-2/tugas2.js
node pertemuan-2/tugas3.js
```

### Pertemuan 3 — HTTP Server

```bash
cd pertemuan-3
node server.js        # term 1: jalankan server (port 3000)
node client.js        # term 2: jalankan test — ubah hostname di client.js jadi IP server
```

Uji di browser: <http://localhost:3000/status> atau endpoint lain.

### Pertemuan 4 — Express + Socket.IO + RPC

```bash
cd pertemuan-4
npm install
node server.js        # term 1: server di port 3000
node client.js        # term 2: client lokal, atau client.js http://IP:3000 dari laptop lain
```

Uji di browser: <http://localhost:3000/api/users>.

## Detail Endpoint

### Pertemuan 3 — Simulasi HTTP status code

| Endpoint | Method | Kode |
| --- | --- | --- |
| `/` | GET | 200 |
| `/about` | GET | 200 |
| `/status` | GET | 200 |
| `/status/102` | GET | 102 (interim) → 200 |
| `/status/200` | GET | 200 |
| `/status/201` | POST | 201 |
| `/status/301` | GET | 301 → `/status/200` |
| `/status/302` | GET | 302 → `/about` |
| `/status/400` | GET | 400 |
| `/status/404` | GET | 404 |
| `/status/500` | GET | 500 |

### Pertemuan 4 — Express + Socket.IO + RPC

| Endpoint / Event | Method | Fungsi |
| --- | --- | --- |
| `/api/users` | GET | ambil daftar user |
| `/api/users` | POST | tambah user (body JSON `{ id, name }`) |
| `/rpc` | POST | panggil prosedur `add` / `multiply` |
| `chat_message` | Socket.IO | kirim pesan ke server |
| `chat_reply` | Socket.IO | jawaban bot dari server |

## Teknologi

- [Node.js](https://nodejs.org/) — runtime utama, modul `node:http` untuk pertemuan-3
- [Express](https://expressjs.com/) — kerangka REST API di pertemuan-4
- [Socket.IO](https://socket.io/) — komunikasi realtime dua arah di pertemuan-4

## Kontributor

- **Ibnu Hafiz Asqolani** — NIM **24SA31A023**
- GitHub: [pulenhfz](https://github.com/pulenhfz)

## Lisensi

Didistribusikan di bawah [Lisensi MIT](LICENSE).

---

**Kembali ke atas** [↑](#sistem-terdistribusi)
