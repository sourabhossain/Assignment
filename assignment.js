// Kilometer To Meter Conversion Function
function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return -1;
    }

    return (kilometer * 1000).toFixed(2);
}

console.log(`Result: ${kilometerToMeter(5)}`);