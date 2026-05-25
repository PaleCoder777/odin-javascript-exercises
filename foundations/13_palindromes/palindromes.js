// If normal string === reverse string TRUE, else FALSE
const palindromes = function (string) {
    string = string.toLowerCase().replace(/[.,!]/g, "");
    string = string.split(" ");
    string = string.join("");

    let reverseString = "";
    for (let i = string.length-1; i >= 0; i--) {
        reverseString = reverseString.concat(string[i]);
    }

    return (string === reverseString);
};

// Do not edit below this line
module.exports = palindromes;
