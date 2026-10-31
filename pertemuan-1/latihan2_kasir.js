
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

async function kasir() {
  try {
    console.log('=== PROGRAM KASIR RINGKAS ===');

    const namaBarang = (await rl.question('Masukkan Nama Barang  : ')).trim();
    const inputHarga = (await rl.question('Masukkan Harga Satuan : ')).trim();
    const inputJumlah = (await rl.question('Masukkan Jumlah Beli  : ')).trim();

    const hargaSatuan = Number(inputHarga);
    const jumlahBeli = Number(inputJumlah);

    // Validasi input
    if (!namaBarang) {
      console.log('Error: Nama barang tidak boleh kosong!');
      return;
    }

    if (inputHarga === '' || !Number.isFinite(hargaSatuan) || hargaSatuan < 0) {
      console.log('Error: Harga satuan harus berupa angka yang tidak negatif!');
      return;
    }

    if (inputJumlah === '' || !Number.isSafeInteger(jumlahBeli) || jumlahBeli <= 0) {
      console.log('Error: Jumlah beli harus berupa bilangan bulat positif!');
      return;
    }

    // Menghitung total belanja
    const totalHarga = hargaSatuan * jumlahBeli;

    if (!Number.isFinite(totalHarga)) {
      console.log('Error: Total harga terlalu besar!');
      return;
    }

    // Memberikan diskon 10% jika total >= 100000
    const diskon = totalHarga >= 100000 ? totalHarga * 0.1 : 0;
    const totalBayar = totalHarga - diskon;

    // Format angka menjadi Rupiah
    const rupiah = (nilai) =>
      `Rp ${nilai.toLocaleString('id-ID', { maximumFractionDigits: 2 })}`;

    // Menampilkan struk belanja
    console.log('\n========== STRUK BELANJA ==========');
    console.log(`Nama Barang  : ${namaBarang}`);
    console.log(`Harga Satuan : ${rupiah(hargaSatuan)}`);
    console.log(`Jumlah Beli  : ${jumlahBeli}`);
    console.log('-----------------------------------');
    console.log(`Total Harga  : ${rupiah(totalHarga)}`);
    console.log(`Diskon (10%) : ${rupiah(diskon)}`);
    console.log(`Total Bayar  : ${rupiah(totalBayar)}`);
    console.log('===================================');
  } finally {
    rl.close();
  }
}

kasir();
