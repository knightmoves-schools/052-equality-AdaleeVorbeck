function priceCheck(price) {
    if (price == 1.50) {
        return 'match';
    }
}

function strictPriceCheck(price) {
    if (price === 1.50) {
        return 'match';
    }
}


//should not return match when 1.00 is passed in as an argument to priceCheck

//should not return match when the string 1.50 is passed in as an argument to strictPriceCheck
//should not return match when 1.00 is passed in as an argument to strictPriceCheck