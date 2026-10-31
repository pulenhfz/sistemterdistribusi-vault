
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

async function kalkulator() {
  try {
    console.log('=== KALKULATOR SEDERHANA ===');

    const inputPertama = await rl.question('Masukkan Angka Pertama : ');
    const operator = (await rl.question('Masukkan Operator (+, -, *, /) : ')).trim();
    const inputKedua = await rl.question('Masukkan Angka Kedua : ');

    const angkaPertama = Number(inputPertama);
    const angkaKedua = Number(inputKedua);

    // Validasi input angka
    if (
      inputPertama.trim() === '' ||
      inputKedua.trim() === '' ||
      !Number.isFinite(angkaPertama) ||
      !Number.isFinite(angkaKedua)
    ) {
      console.log('Error: Kedua input harus berupa angka yang valid!');
      return;
    }

    let hasil;

    // Percabangan berdasarkan operator
    if (operator === '+') {
      hasil = angkaPertama + angkaKedua;
    } else if (operator === '-') {
      hasil = angkaPertama - angkaKedua;
    } else if (operator === '*') {
      hasil = angkaPertama * angkaKedua;
    } else if (operator === '/') {
      if (angkaKedua === 0) {
        console.log('Error: Pembagian dengan angka 0 tidak diperbolehkan!');
        return;
      }
      hasil = angkaPertama / angkaKedua;
    } else {
      console.log('Error: Operator tidak valid! Gunakan +, -, *, atau /.');
      return;
    }

    console.log('\n--- Hasil Perhitungan ---');
    console.log(`${angkaPertama} ${operator} ${angkaKedua} = ${hasil}`);
  } finally {
    rl.close();
  }
}

kalkulator();
