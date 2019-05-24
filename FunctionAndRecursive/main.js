// VERSION 1.0

function printFarmInventory(cows, chickens) {
    var cowString = String(cows);
    while(cowString.length < 3) {
        cowString = "0" + cowString;
    }
    console.log(cowString + "Cow");
    var chickenString = String(chickens);
    while(chickenString.length < 3) {
        chickenString = "0" + chickenString;
    }
    console.log(chickenString + "Chicken");
}



console.log(printFarmInventory(7, 11));




// VERSION 1.1

function printZeroPaddedWithLabel(number, label) {
    var numberString = String(number);
    while(numberString.length < 3)
        numberString = "0" + numberString;
    console.log(numberString + " " + label);
}




function printFarmInventory(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, "Cows");
    printZeroPaddedWithLabel(chickens, "chickens");
    printZeroPaddedWithLabel(pigs, "Pigs");
}

printFarmInventory(7, 11, 3);





// VERSION 1.2 FINAL

function zerePad(number, width) {
    var string = String(number);
    while(string.length < width) 
        string = "0" + string;
    return string;
    
}

function printFarmInventory(cows, chickens, pigs) {
    console.log(zerePad(cows, 3) + "Cow");
    console.log(zerePad(chickens, 3) + "Chickens");
    console.log(zerePad(pigs, 3) + "Pigs");
}


printFarmInventory(7, 12, 10);



// HOMEWORK


// 1.   Write function which return minimal number


function min(a, b) {
    if(a > b)
        return b;
    else 
        return a;
}

console.log(min(2, 2));





// 2.   Write a function that displays the number of characters specified

function countsBs(str, char) {
    var numChar = 0;
    for(var i = 0; i < str.length; i++) {
        if (str[i] == char)
            numChar += 1;
    }
    return numChar;
}


console.log(countsBs("Can you bring me a bottle please", "e"));








