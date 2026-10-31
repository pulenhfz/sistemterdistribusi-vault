console.log("=== BUKTI EKSEKUSI NON-BLOCKING NODE.JS ===");
console.log("[1] Langkah Pertama: Memulai Program");

// Operasi Asinkronus (Simulasi pembacaan database 2 detik)
setTimeout(() => {
    console.log("[2] Langkah Kedua: Data dari Database Berhasil Diambil (2 Detik)");
}, 2000);

console.log("[3] Langkah Ketiga: Mengirim Respon Lain Tanpa Menunggu Langkah Kedua");
