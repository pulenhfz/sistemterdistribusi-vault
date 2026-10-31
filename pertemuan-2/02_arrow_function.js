// Function Expression Konvensional
const sapaPengguna = function(nama) {
    return `Halo ${nama}, selamat datang di Node.js!`;
};

// Arrow Function dengan Kurung Kurawal (Explicit Return)
const hitungKeliling = (panjang, lebar) => {
    return 2 * (panjang + lebar);
};

// Arrow Function Ringkas (Implicit Return)
const kuadrat = (x) => x * x;

// Pengujian Fungsi
console.log(sapaPengguna("Ahmad"));
console.log(`Keliling (10, 5): ${hitungKeliling(10, 5)}`);
console.log(`Kuadrat dari 7: ${kuadrat(7)}`);
