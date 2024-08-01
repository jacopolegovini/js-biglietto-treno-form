console.log('JS OK')

/* 
Preparazione
Dichiarare le variabili
Fase di gestione
    Elaborazione dati
    Dichiarazione variabili
        - Prezzo al chilometro per chilometri dichiarati
        - Riduzione in base all'età
    - Produzione output
*/

// Preparazione
let ticketPriceElement = document.getElementById('price');
let youngDiscountElement = document.getElementById('young-sale');
let seniorDiscountElement = document.getElementById('senior-sale');
let totalKmField = document.getElementById('total-km');
let userAgeField = document.getElementById('user-age');
const buttonGenerate = document.querySelector('.button-generate');
const buttonDelete = document.querySelector('.button-delete');
const form = document.querySelector('form');
let fullNameField = document.getElementById('full-name');
let trainCarriageElement = document.getElementById('train-carriage');
let randomNumberElement = document.getElementById('random-number');
let ticketTypeElement = document.getElementById('ticket-type');


// Dichiarare le variabili
let totalPrice;
let discountPrice;
const pricePerKM = 0.21;
const youngDiscount = pricePerKM - (0.21 * 20 / 100);
const seniorDiscount = pricePerKM - (0.21 * 40 / 100);


// Fase di gestione degli eventi
buttonGenerate.addEventListener ('click', function (){

    // Elaborazione dati
    // Dichiarazione variabili
    const KMNumber= parseInt(totalKmField.value.trim());
    const userAge = parseInt(userAgeField.value.trim());
    const fullName = fullNameField.value;

    
    totalPrice = pricePerKM * KMNumber;
    if (userAge <= 18) {
        totalPrice = youngDiscount * KMNumber
    } else if (userAge >= 65) {
        totalPrice = seniorDiscount * KMNumber
    }
    totalPrice = (Math.round(totalPrice * 100) / 100).toFixed(2)

    // Produzione output
    // Prices
    ticketPriceElement.innerText = totalPrice.replace('.', ',') + '€';
    if (userAge <= 18) {
        discountPrice = (Math.round(((pricePerKM * KMNumber) - (totalPrice)) * 100) / 100).toFixed(2)
        youngDiscountElement.innerText = discountPrice.replace('.', ',') + '€';
    } else if (userAge >= 65) {
        discountPrice = (Math.round(((pricePerKM * KMNumber) - (totalPrice)) * 100) / 100).toFixed(2)
        seniorDiscountElement.innerText = discountPrice.replace('.', ',') + '€';
    }

    // Others data
    fullNameField.innerText = fullName;

    if (discountPrice) {
        ticketTypeElement.innerText = 'Biglietto Special'
    } else {
        ticketTypeElement.innerText = 'Biglietto Standard'
    }

    trainCarriageElement.innerText = Math.floor(Math.random() * 10) + 1;
    randomNumberElement.innerText = Math.floor(Math.random() * 99999) + 1;
})

buttonDelete.addEventListener('click', function() {
    form.reset();
})
