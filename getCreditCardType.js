function extractNumbers(input) {
    return input.replace(/\D/g, '');
}

// Modify the getCreditCardType function to use extractNumbers
function getCreditCardType(number) {
    number = extractNumbers(number);
    const regexPatterns = {
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        mastercard: /^5[1-5][0-9]{14}$/,
        amex: /^3[47][0-9]{13}$/,
        diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        enRoute: /^(2014|2149)\d{11}$/,
        jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
        voyager: /^8699[0-9]{11}$/,
        hyperCard: /^(38|60)[0-9]{14}$/,
        aura: /^50[0-9]{14,17}$/
    };

    for (let card in regexPatterns) {
        if (regexPatterns[card].test(number)) {
            return card;
        }
    }
    return null;
}

// Example usage:
console.log(getCreditCardType("5478 4892 7641 3777")); // MasterCard
console.log(getCreditCardType("4916 7924 7756 5268")); // Visa
console.log(getCreditCardType("3781 906552 71685"));  // American Express
console.log(getCreditCardType("3000 261576 7456"));  // Diners Club
console.log(getCreditCardType("6011 7548 0845 7754"));  // Discover
console.log(getCreditCardType("2014 4856013 6630"));  // EnRoute
console.log(getCreditCardType("3541 4209 0731 4181"));  // JCB
console.log(getCreditCardType("86995 1564 17620 8"));  // Voyager
console.log(getCreditCardType("6062 8211 9713 1858"));  // HyerCard
console.log(getCreditCardType("5000 9831 1679 0243"));  // Aura