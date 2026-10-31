// Higher-Order Function
function olahNilai(daftarNilai, callback) {
    const hasilOlah = [];

    for (let i = 0; i < daftarNilai.length; i++) {
        hasilOlah.push(callback(daftarNilai[i]));
    }

    return hasilOlah;
}

// Data Input
const nilaiMahasiswa = [60, 75, 80, 90, 100];

// Penggunaan Callback dengan Arrow Function
const nilaiLulus = olahNilai(nilaiMahasiswa, (nilai) => nilai >= 75);
const nilaiGradeA = olahNilai(nilaiMahasiswa, (nilai) => nilai >= 85 ? 'A' : 'Non-A');

console.log("Nilai Asli:", nilaiMahasiswa);
console.log("Status Kelulusan (>=75):", nilaiLulus);
console.log("Konversi Grade A:", nilaiGradeA);
