console.log('JS OK')

/* 
Preparazione
Dichiarare le variabili
Fase di gestione
    Elaborazione dati
    - Prezzo al chilometro per chilometri dichiarati
    - Riduzione in base all'età
Produzione output
*/

// Preparazione
let ticketPriceElement = document.getElementById('price');
let youngDiscountElement = document.getElementById('young-sale');
let seniorDiscountElement = document.getElementById('senior-sale');
let totalKmField = document.getElementById('total-km');
let userAgeField = document.getElementById('user-age');
const button = document.querySelector('.button-generate');
const form = document.querySelector('form');


// Dichiarare le variabili
let totalPrice;
let discountPrice;
const pricePerKM = 0.21;
const youngDiscount = pricePerKM - (0.21 * 20 / 100);
const seniorDiscount = pricePerKM - (0.21 * 40 / 100);


// Fase di gestione degli eventi
button.addEventListener ('click', function (){

    // Elaborazione dati
    const KMNumber= totalKmField.value.trim();
    const userAge = parseInt(userAgeField.value.trim())
    
    totalPrice = pricePerKM * KMNumber;
    if (userAge <= 18) {
        totalPrice = youngDiscount * KMNumber
    } else if (userAge >= 65) {
        totalPrice = seniorDiscount * KMNumber
    }
    totalPrice = (Math.round(totalPrice * 100) / 100).toFixed(2)

    ticketPriceElement.innerHTML = `
    Vuoi fare <strong>${KMNumber}</strong> Km e hai <strong>${userAge}</strong> anni. <br>
    Ecco qui il tuo prezzo secondo le informazioni che ci hai condiviso: <strong>${totalPrice.replace('.', ',')}€</strong>`;

    if (userAge <= 18) {
        discountPrice = (Math.round(((pricePerKM * KMNumber) - (totalPrice)) * 100) / 100).toFixed(2)
        youngDiscountElement.innerHTML = `Hai risparmiato: <strong>${discountPrice.replace('.', ',')}€</strong>`;
    } else if (userAge >= 65) {
        discountPrice = (Math.round(((pricePerKM * KMNumber) - (totalPrice)) * 100) / 100).toFixed(2)
        seniorDiscountElement.innerHTML = `Hai risparmiato: <strong>${discountPrice.replace('.', ',')}€</strong>`;
    }

    // Produzione output
    ticketPriceElement.innerHTML = `
    Vuoi fare <strong>${KMNumber}</strong> Km e hai <strong>${userAge}</strong> anni. <br>
    Ecco qui il tuo prezzo secondo le informazioni che ci hai condiviso: <strong>${totalPrice.replace('.', ',')}€</strong>`;

    if (userAge <= 18) {
        discountPrice = (Math.round(((pricePerKM * KMNumber) - (totalPrice)) * 100) / 100).toFixed(2)
        youngDiscountElement.innerHTML = `Hai risparmiato: <strong>${discountPrice.replace('.', ',')}€</strong>`;
    } else if (userAge >= 65) {
        discountPrice = (Math.round(((pricePerKM * KMNumber) - (totalPrice)) * 100) / 100).toFixed(2)
        seniorDiscountElement.innerHTML = `Hai risparmiato: <strong>${discountPrice.replace('.', ',')}€</strong>`;
    }

    form.reset();
})


