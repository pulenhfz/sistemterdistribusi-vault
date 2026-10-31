// Function tanpa parameter dan tanpa return value
function salam() {
    console.log("Selamat datang di Praktikum Pemrograman Node.js!");
    console.log("Modul: Konsep Function & Asynchronous Programming");
}

// Function dengan parameter dan return value
function hitungLuas(panjang, lebar) {
    const luas = panjang * lebar;
    return luas;
}

// Eksekusi Function
salam();

const p = 10;
const l = 5;
const hasilLuas = hitungLuas(p, l);

console.log(`Luas persegi panjang (${p} x ${l}) adalah: ${hasilLuas}`);
