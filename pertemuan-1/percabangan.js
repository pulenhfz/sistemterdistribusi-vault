import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });

async function prosesNilai() {

  console.log("=== SISTEM EVALUASI NILAI MAHASISWA ===");

  const inputNilai = await rl.question('Masukkan Nilai Angka (0 - 100): ');
  const nilai = parseFloat(inputNilai);

  // Validasi input

  if (isNaN(nilai) || nilai < 0 || nilai > 100) {

    console.log("Error: Nilai yang dimasukkan harus berupa angka 0 - 100!");

  } else {

    let grade = '';
    let status = '';

    // Penentuan Grade dan Status Kelulusan

    if (nilai >= 85) {
      grade = 'A';
      status = 'LULUS (Sangat Memuaskan)';

    } else if (nilai >= 75) {
      grade = 'B';
      status = 'LULUS (Memuaskan)';

    } else if (nilai >= 65) {
      grade = 'C';
      status = 'LULUS (Cukup)';

    } else if (nilai >= 50) {
      grade = 'D';
      status = 'TIDAK LULUS (Membawa Remedial)';

    } else {

      grade = 'E';
      status = 'TIDAK LULUS';

    }

    console.log("\n--- Hasil Evaluasi ---");
    console.log(`Nilai Angka : ${nilai}`);
    console.log(`Grade       : ${grade}`);
    console.log(`Keterangan  : ${status}`);

  }

  rl.close();

}

prosesNilai();
