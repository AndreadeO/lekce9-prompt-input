let sirkaPracky = Number(prompt('Zadej sirku pracky v centimetrech:'));
let vyskaPracky = parseInt(prompt('Zadej vysku pracky v centimetrech:'));
let hloubkaPracky = parseInt(prompt('Zadej hloubku pracky v centimetrech:'));

const sirka = 62;
const vyska = 70;
const hloubka = 80;

if (sirkaPracky < sirka && vyskaPracky < vyska && hloubkaPracky < hloubka) {
    alert('Super, pracka se vejde, muzes ji koupit.');
} else {
    alert('Bohuzel nemas na pracku misto:-(');
}
console.log(typeof sirkaPracky);