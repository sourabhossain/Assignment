// https://github.com/sourabhossain/Assignment

// Kilometer To Meter Conversion Function
function kilometerToMeter(kilometer) {
    kilometer = parseFloat(kilometer);

    if (isNaN(kilometer) || kilometer < 0) {
        return -1;
    }

    return (kilometer * 1000).toFixed(2);
}

console.log(`Result: ${kilometerToMeter(100)}`);

// Budget Calculator Function
function budgetCalculator(clockQuantity, phoneQuantity, laptopQuantity) {
    if (!Number.isInteger(clockQuantity) || !Number.isInteger(phoneQuantity) || !Number.isInteger(laptopQuantity) || clockQuantity < 0 || phoneQuantity < 0 || laptopQuantity < 0) {
        return -1;        
    }

    return ((clockQuantity * 50) + (phoneQuantity * 100) + (laptopQuantity * 500)).toFixed(2);
}

console.log(`Result: ${budgetCalculator(2, 3, 4)}`);

// Hotel Cost Function 
function hotelCost(days) {
    if (!Number.isInteger(days) || days < 0) {
        return -1;
    }

    let totalCost = 0;

    if (days > 20) {
        totalCost += ((days - 20) * 50);
        days = 20;
    }

    if (days > 10) {
        totalCost += ((days - 10) * 80);
        days = 10;
    }

    return totalCost + (days * 100);
}

console.log(`Result: ${hotelCost(8)}`);

// Hotel Cost Function 
function megaFriend(friends) {
    if (!Array.isArray(friends) || !friends.length) {
        return -1;
    }

    let output = "";

    for (const name of friends) {
        if (name.length > output.length) {
            output = name;   
        }
    }

    return output;
}

console.log(`Result: ${megaFriend(["Sourab", "Shafayet", "Sahin", "Fahad"])}`);