# Pertemuan 3 — HTTP Server

Implementasi HTTP server dengan modul bawaan `node:http`. Mempelajari struktur request/response, HTTP status code (1xx–5xx), dan redirect.

## Menjalankan

> Prasyarat: Node.js ≥ 18. Tidak ada dependensi eksternal (modul bawaan).

Masuk folder:

```bash
cd pertemuan-3
```

**Terminal 1 — jalankan server:**

```bash
node server.js
```

Server berjalan di `http://localhost:3000`.

**Terminal 2 — jalankan test client:**

Ubah `hostname` di `client.js` sesuai IP server, lalu:

```bash
node client.js
```

Client akan memanggil seluruh endpoint simulasi status code (1xx–5xx) dan menampilkan hasilnya.

**Uji manual di browser:** buka <http://localhost:3000/status> atau endpoint lain dari daftar di bawah.

## Endpoint

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
