<div align="center">

# Sistem Terdistribusi

_Arsip praktikum mata kuliah Sistem Terdistribusi — dari dasar Node.js sampai komunikasi realtime berbasis Socket.IO._

[![Node.js](https://img.shields.io/badge/node.js-%23ffffff.svg?style=for-the-badge&logo=node.js&logoColor=339933)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/express.js-%23ffffff.svg?style=for-the-badge&logo=express&logoColor=000000)](https://expressjs.com/)
[![Socket.IO](https://img.shields.io/badge/socket.io-%23ffffff.svg?style=for-the-badge&logo=socketdotio&logoColor=010101)](https://socket.io/)

[Struktur](#struktur-repo) • [Prasyarat](#prasyarat) • [Detail](#detail-pertemuan) • [Teknologi](#teknologi) • [Kontributor](#kontributor) • [Lisensi](#lisensi)

</div>

---

## Tentang

Repositori ini berisi kumpulan hasil praktikum **Sistem Terdistribusi** (Semester 5). Setiap pertemuan disimpan dalam folder terpisah agar mudah ditelusuri. Seluruh istilah dan output menggunakan Bahasa Indonesia.

### Cara Clone

```bash
git clone https://github.com/pulenhfz/sistemterdistribusi-vault.git
```

Setelah repo di-clone, masuk ke folder pertemuan dan ikuti petunjuk di `README` masing-masing folder (berisi cara menjalankan). Setiap folder pertemuan punya `README.md` sendiri.

## Struktur Repo

| Folder | Materi | Isi |
| --- | --- | --- |
| [`pertemuan-1/`](pertemuan-1/README.md) | Dasar JavaScript & Node.js | sintaks, input/output, percabangan, perulangan, latihan |
| [`pertemuan-2/`](pertemuan-2/README.md) | Fungsi & Async | function dasar, arrow, callback, async/await, 3 tugas |
| [`pertemuan-3/`](pertemuan-3/README.md) | HTTP Server | protokol HTTP, status code 1xx–5xx, `node:http` |
| [`pertemuan-4/`](pertemuan-4/README.md) | Express + Socket.IO + RPC | REST API, chat realtime, remote procedure call |

> Setiap folder punya `README` sendiri dengan instruksi cara menjalankan.

## Prasyarat

- **Node.js ≥ 18** (kode memakai `fetch` native, `res.writeProcessing()`, dan ESM `import`)
- **npm** (untuk folder yang memiliki `package.json`)

> Lokal diuji pada Node.js v24.15.0.

## Detail Pertemuan

Penjelasan materi per pertemuan, bukan cara menjalankan — cara menjalankan ada di `README` masing-masing folder.

### Pertemuan 1 — Dasar JavaScript & Node.js
Materi pengenalan sintaks JS di runtime Node.js.

| # | File | Materi |
| --- | --- | --- |
| 1 | `hello.js` | Hello world pertama |
| 2 | `input_output.js` | Input/output konsol |
| 3 | `percabangan.js` | `if/else`, switch |
| 4 | `perulangan.js` | `for`, `while`, `do-while` |
| 5 | `latihan1_kalkulator.js` | operasi aritmatika |
| 6 | `latihan2_kasir.js` | logika kasir sederhana |
| 7 | `latihan3_prima.js` | cek bilangan prima |
| 8 | `latihan.js` | latihan gabungan |

### Pertemuan 2 — Fungsi & Async

Dari function dasar sampai pola async/await.

| # | File | Materi |
| --- | --- | --- |
| 1 | `01_function_dasar.js` | function declaration |
| 2 | `02_arrow_function.js` | arrow function |
| 3 | `03_callback.js` | pola callback |
| 4 | `04_async_callback.js` | async + callback |
| 5 | `05_async_await_readline.js` | async/await dengan readline |
| 6 | `tugas1.js` | konversi suhu (C↔F) |
| 7 | `tugas2.js` | simulasi autentikasi asinkron (Promise) |
| 8 | `tugas3.js` | CLI kasir produk asinkron (readline/promises) |

### Pertemuan 3 — HTTP Server

Implementasi HTTP server dengan modul bawaan `node:http`. Belajar struktur request/response, HTTP status code (1xx–5xx), dan redirect.

- `server.js` — HTTP server dengan endpoint simulasi status code
- `client.js` — test otomatis memanggil server

### Pertemuan 4 — Express + Socket.IO + RPC

Implementasi tiga pola komunikasi dalam satu server: REST API dengan Express, chat realtime dengan Socket.IO, dan remote procedure call (RPC).

- REST: `GET/POST /api/users`
- Socket.IO: event `chat_message` → `chat_reply`
- RPC: `POST /rpc` dengan prosedur `add` dan `multiply`

## Teknologi

- [Node.js](https://nodejs.org/) — runtime utama, modul `node:http` untuk pertemuan-3
- [Express](https://expressjs.com/) — kerangka REST API di pertemuan-4
- [Socket.IO](https://socket.io/) — komunikasi realtime dua arah di pertemuan-4

## Kontributor

- **Ibnu Hafiz Asqolani** — NIM **24SA31A023**

## Lisensi

Didistribusikan di bawah [Lisensi MIT](LICENSE).

---
