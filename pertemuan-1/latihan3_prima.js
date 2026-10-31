
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

async function cekBilanganPrima() {
  try {
    console.log('=== PENGECEK BILANGAN PRIMA ===');

    const inputAngka = (await rl.question('Masukkan bilangan bulat positif: ')).trim();
    const angka = Number(inputAngka);

    // Validasi input
    if (inputAngka === '' || !Number.isSafeInteger(angka) || angka <= 0) {
      console.log('Error: Masukkan bilangan bulat positif yang valid!');
      return;
    }

    // Bilangan prima harus lebih besar dari 1
    let prima = angka > 1;

    // Memeriksa apakah angka memiliki faktor pembagi
    for (let i = 2; i <= Math.sqrt(angka); i++) {
      if (angka % i === 0) {
        prima = false;
        break;
      }
    }

    // Menampilkan hasil pemeriksaan
    if (prima) {
      console.log(`${angka} adalah Bilangan Prima.`);
    } else {
      console.log(`${angka} adalah Bukan Bilangan Prima.`);
    }
  } finally {
    rl.close();
  }
}

cekBilanganPrima();
