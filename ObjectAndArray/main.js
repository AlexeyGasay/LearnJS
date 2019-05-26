var anObject = {
    left: 1,
    right: 2
};

console.log(anObject.left);

delete anObject.left; 

console.log(anObject.left);

console.log("left" in anObject);

console.log("right" in anObject);

console.log(anObject["right"]);


function numOfArguments() {
    console.log("you gave me " + arguments.length + " arguments");
}

numOfArguments("hello", 2, true); // 3

numOfArguments();  // 0



var string = "Earth";

console.log(string.slice(1, string.length - 1)); // art








//  HOMEWORK



//  1. Write a function like range(1, 5)  =  1, 2, 3, 4, 5


//  1.1 Create an array of given numbers 

function range(start, end, step = start < end ? 1 : -1) {
    var arr = [];
    
    if (step > 0) {
        for ( var i = start; i <= end; i+= step ) arr.push(i);
    }
    else {
        for ( var i = start; i >= end; i+= step ) arr.push(i);
    }
    
    
    return arr;
}


console.log(range(1, 10));

console.log(range(5, 2, -1));




//  1.2  Sum all numbers of given array

function sum(arr) {
    var result = 0;
    
    for ( var i = 0; i <= arr.length; i++ ) {
        result += i;
    }
    
    return result;
}


console.log(sum(range(1, 10))); // 55







// 2. Write a function like array.reverse()


// 2.1 

var array = [1, 2, 3, "hello", true];

//array.reverse(); // true, "hello", 3, 2, 1 


function reverseArray(arr) {
    var newArr = [];
     
    for ( var i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    
    return newArr;
}


console.log(reverseArray(array)); // true, "hello", 3, 2, 1



// 2.2 How work standard function array.reverse()


function reverseInPlace(array) {
    for ( var i = 0; i < Math.floor(array.length / 2); i++) {
        var old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
        
    }
    
    return array;
}


var arrayOfNum = [1, 2, 3, 4, 5];

reverseInPlace(arrayOfNum);

console.log(arrayOfNum); // 5, 4, 3, 2, 1




















