// Kilometer To Meter Conversion Function
function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return -1;
    }

    return (kilometer * 1000).toFixed(2);
}

console.log(`Result: ${kilometerToMeter(5)}`);

// Budget Calculator Function
function budgetCalculator(clockQuantity, phoneQuantity, laptopQuantity) {
    if (clockQuantity < 0 || phoneQuantity < 0 || laptopQuantity < 0) {
        return -1;        
    }

    return ((clockQuantity * 50) + (phoneQuantity * 100) + (laptopQuantity * 500)).toFixed(2);
}

console.log(`Result: ${budgetCalculator(2, 3, 4)}`);