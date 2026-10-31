import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

// Membuat interface readline
const rl = readline.createInterface({ input, output });
async function main() {
    console.log("---Program Input/Output Node.js---");

    // Mengambil input dari user
    const name = await rl.question("Masukkan nama Anda: ");
    const nim = await rl.question("Masukkan NIM Anda: ");
    const kelas = await rl.question("Masukkan kelas Anda: ");

    console.log("\n--------------------------------------");

    console.log(`Halo, ${nama}!`);
    console.log(`NIM Anda   : ${nim}`);
    console.log(`Kelas Anda : ${kelas}`);

      // Menutup interface readline
rl.close();

}

main();