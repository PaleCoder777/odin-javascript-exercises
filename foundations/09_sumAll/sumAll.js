const sumAll = function(a, b) {
    // make a list of all number between the parameters (a, b)
    let arr = [];
    let sum = 0;
    
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
