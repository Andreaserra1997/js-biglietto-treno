const km = parseInt(prompt(`Quanti km vuoi fare?`));
document.getElementById(`chilometri`).innerHTML = km;

const age = parseInt(prompt(`Quanti anni hai?`));
document.getElementById(`età`).innerHTML = age;

const priceForKm = km * 0.21 .toFixed(2);
document.getElementById(`normalprice`).innerHTML = priceForKm;


if (age < 18) {
    const priceSale20 = priceForKm - (priceForKm * 20 / 100).toFixed(2);
    document.getElementById(`under18`).innerHTML = priceSale20;
}

if (age > 65) {
    const priceSale40 = priceForKm - (priceForKm * 40 / 100).toFixed(2);
    document.getElementById(`over65`).innerHTML = priceSale40;
}

if (age > 18 && age < 65) {
    const priceForKm = km * 0.21;
}