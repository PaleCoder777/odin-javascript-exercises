const repeatString = function(string, num) {
    let repeatedString = ("");

    for (let i=1; i <= num; i++) {
        if (num === 0 || num < 0) return ("Error");
        
        repeatedString += string;
    }

    return repeatedString;
};

repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
