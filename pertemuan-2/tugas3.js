// Soal 3: CLI Kasir Produk Asinkronus
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

// Daftar barang toko (array of objects)
const daftarBarang = [
    { id: 1, nama: "Buku Tulis", harga: 5000 },
    { id: 2, nama: "Pulpen", harga: 3000 },
    { id: 3, nama: "Pensil", harga: 2000 }
];

// Simulasi kalkulasi transaksi selama 1,5 detik
function hitungTotalBelanja(idBarang, jumlahBeli) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const barang = daftarBarang.find((item) => item.id === idBarang);

            if (!barang) {
                reject(new Error("ID Barang tidak ditemukan!"));
            } else if (!Number.isInteger(jumlahBeli) || jumlahBeli <= 0) {
                reject(new Error("Jumlah beli harus berupa bilangan bulat positif!"));
            } else {
                resolve({ barang, jumlahBeli, total: barang.harga * jumlahBeli });
            }
        }, 1500);
    });
}

async function main() {
    const rl = readline.createInterface({ input, output });

    console.log("=== SISTEM KASIR PRODUK ASINKRONUS ===");
    console.log("Daftar Barang:");
    daftarBarang.forEach((barang) => {
        console.log(`${barang.id}. ${barang.nama} - Rp${barang.harga}`);
    });

    try {
        const idBarang = Number(await rl.question("Masukkan ID Barang: "));
        const jumlahBeli = Number(await rl.question("Masukkan Jumlah Beli: "));

        console.log("\nMemproses transaksi...");
        const hasil = await hitungTotalBelanja(idBarang, jumlahBeli);

        console.log("\n=== STRUK PEMBAYARAN ===");
        console.log(`Nama Barang  : ${hasil.barang.nama}`);
        console.log(`Jumlah       : ${hasil.jumlahBeli}`);
        console.log(`Harga Satuan : Rp${hasil.barang.harga}`);
        console.log(`Total Bayar  : Rp${hasil.total}`);
    } catch (error) {
        console.error(`Gagal memproses transaksi: ${error.message}`);
    } finally {
        rl.close();
        console.log("\nSesi kasir selesai.");
    }
}

main();
