console.log('JS OK')

/* 
1. Collegarsi al DOM e recuperare gli elementi
2. Dichiarare le variabili
3. Raccogliere i dati
    - Richiesta numero chilometri
    - Richiesta età passeggero
4. Elaborazione dati
    - Prezzo al chilometro per chilometri dichiarati
    - Riduzione in base all'età
5. Produzione output
*/

// 1. Collegarsi al DOM e recuperare gli elementi
let ticketPriceElement = document.getElementById('price');
// let youngDiscountElement = document.getElementById('young-sale');
// let seniorDiscountElement = document.getElementById('senior-sale');

// 2. Dichiarare le variabili
let totalPrice;
let discountPrice;
const pricePerKM = 0.21;
youngDiscount = pricePerKM - (0.21 * 20 / 100);
const seniorDiscount = pricePerKM - (0.21 * 40 / 100);

// 3. Raccogliere i dati
// const KMNumber = prompt('Quanti chilometri vorresti fare?', '10');
// const userAge = prompt('Quanti anni hai?', '28');


// 4. Elaborazione dati
totalPrice = pricePerKM * KMNumber;

if (userAge <= 18) {
    totalPrice = youngDiscount * KMNumber
} else if (userAge >= 65) {
    totalPrice = seniorDiscount * KMNumber
}

totalPrice = (Math.round(totalPrice * 100) / 100).toFixed(2)

// 5. Produzione output
// ticketPriceElement.innerHTML = `
// Vuoi fare <strong>${KMNumber}</strong> Km e hai <strong>${userAge}</strong> anni. <br>
// Ecco qui il tuo prezzo secondo le informazioni che ci hai condiviso: <strong>${totalPrice.replace('.', ',')}€</strong>`;

// if (userAge <= 18) {
//     discountPrice = (Math.round(((pricePerKM * KMNumber) - (totalPrice)) * 100) / 100).toFixed(2)
//     youngDiscountElement.innerHTML = `Hai risparmiato: <strong>${discountPrice.replace('.', ',')}€</strong>`;
// } else if (userAge >= 65) {
//     discountPrice = (Math.round(((pricePerKM * KMNumber) - (totalPrice)) * 100) / 100).toFixed(2)
//     seniorDiscountElement.innerHTML = `Hai risparmiato: <strong>${discountPrice.replace('.', ',')}€</strong>`;
// }