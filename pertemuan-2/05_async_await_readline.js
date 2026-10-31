import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

// Simulasi Database Pengguna
const databasePengguna = [
    { id: 101, nama: "Budi Santoso", peran: "Developer" },
    { id: 102, nama: "Siti Aminah", peran: "Designer" },
    { id: 103, nama: "Rian Hidayat", peran: "DevOps" }
];

// Fungsi simulasi fetch data berbasis Promise
function cariPenggunaByDB(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pengguna = databasePengguna.find((item) => item.id === id);

            if (pengguna) {
                resolve(pengguna);
            } else {
                reject(new Error(`Pengguna dengan ID ${id} tidak ditemukan dalam database.`));
            }
        }, 1500);
    });
}

// Main Program menggunakan Async/Await & Readline
async function main() {
    const rl = readline.createInterface({ input, output });

    console.log("==========================================");
    console.log(" SISTEM PENCARIAN PENGGUNA (ASYNC CLI) ");
    console.log("==========================================");

    try {
        const jawaban = await rl.question("Masukkan ID Pengguna (101-103): ");
        const idInput = parseInt(jawaban, 10);

        console.log("\nMemproses pencarian data ke server...");

        // Menunggu hasil dari Promise
        const dataPengguna = await cariPenggunaByDB(idInput);

        console.log(" Data Berhasil Ditemukan:");
        console.log(`- ID   : ${dataPengguna.id}`);
        console.log(`- Nama : ${dataPengguna.nama}`);
        console.log(`- Peran : ${dataPengguna.peran}`);
    } catch (error) {
        console.error(`\n Gagal Memproses: ${error.message}`);
    } finally {
        rl.close();
        console.log("\n==========================================");
        console.log("Sesi praktikum selesai.");
    }
}

main();
