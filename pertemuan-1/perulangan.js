import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });
async function demoPerulangan() {

  console.log("=== DEMO PERULANGAN NODE.JS ===\n");

  // 1. Perulangan FOR

  const jumlahInput = await rl.question('Masukkan jumlah pengulangan (FOR): ');
  const max = parseInt(jumlahInput);

  console.log(`\nMencetak deret angka 1 sampai ${max}:`);
  for (let i = 1; i <= max; i++) {

    console.log(` Iterasi ke-${i}`);

  }

  // 2. Perulangan WHILE (Validasi konfirmasi)

  console.log("\n--- Validasi Pengulangan dengan WHILE ---");
  let konfirmasi = await rl.question('Apakah Anda ingin mengulang lagi? (y/n): ');
  while (konfirmasi.toLowerCase() !== 'y' && konfirmasi.toLowerCase() !== 'n') {

    console.log("Input salah! Harap masukkan pilihan 'y' atau 'n'.");
    konfirmasi = await rl.question('Apakah Anda ingin mengulang lagi? (y/n): ');

  }

  console.log(`\nKeputusan Anda: ${konfirmasi.toLowerCase() === 'y' ? 'Setuju' : 'Batal'}`);
  rl.close();

}

demoPerulangan();
