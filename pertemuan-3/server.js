import http from 'http';

const PORT = 3000;

// Informasi Klasifikasi HTTP Status Codes (1xx - 5xx)
const HTTP_STATUS_INFO = {
  title: 'Simulasi Klasifikasi HTTP Status Codes',
  categories: {
    '1xx': 'INFORMATIONAL - Request diterima, proses sedang berlanjut.',
    '2xx': 'SUCCESS - Request berhasil diterima, dipahami, dan diproses.',
    '3xx': 'REDIRECTION - Klien harus mengambil tindakan tambahan, biasanya pengalihan URL.',
    '4xx': 'CLIENT ERROR - Kesalahan ada pada permintaan klien (sintaks salah / tidak ada).',
    '5xx': 'SERVER ERROR - Server gagal memenuhi request karena kesalahan internal.'
  }
};

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  // --- Rute Dasar ---
  if (req.url === '/' && req.method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'Halo! Server HTTP Node.js aktif milik Ibnu Hafiz Asqolani 24SA31A023', status: 'success' }));
  } 
  else if (req.url === '/about' && req.method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'Ini adalah halaman About milik Ibnu Hafiz Asqolani 24SA31A023', status: 'success' }));
  } 
  else if (req.url === '/status' && req.method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify(HTTP_STATUS_INFO, null, 2));
  }
  // --- 1xx: INFORMATIONAL (102 Processing) ---
  else if (req.url === '/status/102' && req.method === 'GET') {
    res.writeProcessing(); // Mengirimkan status interim 102
    setTimeout(() => {
      res.statusCode = 200;
      res.end(JSON.stringify({ category: '1xx INFORMATIONAL', code: 102, message: 'Request diterima, proses berlanjut.' }));
    }, 400);
  }
  // --- 2xx: SUCCESS (200 OK & 201 Created) ---
  else if (req.url === '/status/200' && req.method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify({ category: '2xx SUCCESS', code: 200, message: 'Request berhasil diproses.' }));
  } 
  else if (req.url === '/status/201' && req.method === 'POST') {
    res.statusCode = 201;
    res.end(JSON.stringify({ category: '2xx SUCCESS', code: 201, message: 'Resource baru berhasil dibuat.' }));
  }
  // --- 3xx: REDIRECTION (301 Moved Permanently & 302 Found) ---
  else if (req.url === '/status/301' && req.method === 'GET') {
    res.statusCode = 301;
    res.setHeader('Location', '/status/200');
    res.end(JSON.stringify({ category: '3xx REDIRECTION', code: 301, location: '/status/200' }));
  } 
  else if (req.url === '/status/302' && req.method === 'GET') {
    res.statusCode = 302;
    res.setHeader('Location', '/about');
    res.end(JSON.stringify({ category: '3xx REDIRECTION', code: 302, location: '/about' }));
  }
  // --- 4xx: CLIENT ERROR (400 Bad Request & 404 Not Found) ---
  else if (req.url === '/status/400' && req.method === 'GET') {
    res.statusCode = 400;
    res.end(JSON.stringify({ category: '4xx CLIENT ERROR', code: 400, message: 'Permintaan tidak valid.' }));
  } 
  else if (req.url === '/status/404' && req.method === 'GET') {
    res.statusCode = 404;
    res.end(JSON.stringify({ category: '4xx CLIENT ERROR', code: 404, message: 'Resource tidak ditemukan.' }));
  }
  // --- 5xx: SERVER ERROR (500 Internal Server Error) ---
  else if (req.url === '/status/500' && req.method === 'GET') {
    res.statusCode = 500;
    res.end(JSON.stringify({ category: '5xx SERVER ERROR', code: 500, message: 'Kesalahan internal server.' }));
  }
  // --- Fallback Rute Tidak Ditemukan ---
  else {
    res.statusCode = 404;
    res.end(JSON.stringify({ category: '4xx CLIENT ERROR', code: 404, message: 'Halaman tidak ditemukan.' }));
  }
});

server.listen(PORT, () => {
  console.log(`Server milik Ibnu Hafiz Asqolani 24SA31A023 sedang berjalan di http://localhost:${PORT}`);
});