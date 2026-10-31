// Soal 1: Konversi Suhu
const konversiSuhu = (nilaiSuhu, tipeKonversi) => {
    if (tipeKonversi === "C_to_F") {
        return (nilaiSuhu * 9 / 5) + 32;
    } else if (tipeKonversi === "F_to_C") {
        return (nilaiSuhu - 32) * 5 / 9;
    } else {
        return null;
    }
};

// Pengujian konversi suhu
const celcius = 30;
const fahrenheit = 86;

console.log("=== PROGRAM KONVERSI SUHU ===");
console.log(`${celcius}°C = ${konversiSuhu(celcius, "C_to_F")}°F`);
console.log(`${fahrenheit}°F = ${konversiSuhu(fahrenheit, "F_to_C")}°C`);
