const sumAll = function(a, b) {
    // make a list of all number between the parameters (a, b)
    let arr = [];
    let sum = 0;
    
    // if arguments are less than 0, fail
    if (a < 0 || b < 0) return ("ERROR");

    // if arguments are float/have decimals, fail
    if (a % 1 !== 0 || a % 1 !== 0) return ("ERROR");

    // if arguments are non-numbers, fail
    if (typeof(a) !== "number" || typeof(b) !== "number") return ("ERROR");
    
    //  makes it so starting with larger input doesn't matter (numbers switch if true)
    if (a > b) [a, b] = [b, a];

    // add each number [1, 4] to that list
    for (let i = a; i <= b; i++) {
        arr.push(i);
    }

    // get the sum
    sum = arr.reduce((sum, currentNumber) => sum += currentNumber);
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
