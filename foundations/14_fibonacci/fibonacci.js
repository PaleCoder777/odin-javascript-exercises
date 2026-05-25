const fibonacci = function(number) {
    // convert to number
    +number;
    
    // 0, 1 input will both be 1
    if (number === 0) return 0;
    if (number < 0) return ("OOPS");

    // fibonacci sequence starts with initial 2 elements

    let sequence = [0, 1, 1];
    console.log(sequence);

    // consider elements after the initial 2, sum of 2 preceding numbers
    for (let i = 3; i <= number; i++) {
        //console.log(`Pushing index:${i} Argument:${number}`);
        sum = (sequence[i-2] + sequence[i-1]);
        //console.log(sum);
        sequence.push(sum);
        //console.log(sequence);
    }

    console.log(sequence)
    return sequence[number];
};

// Do not edit below this line
module.exports = fibonacci;
