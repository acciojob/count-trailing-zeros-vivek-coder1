function trailingZeros(n) {
    let count = 0;
    for (let i = 5; n / i >= 1; i *= 5) {
        count += Math.floor(n / i);
    }
    return count;
}

// Get input from user
let input = prompt("Enter a non-negative integer:");
let number = parseInt(input);

// Validate input
if (isNaN(number) || number < 0) {
    alert("Please enter a valid non-negative integer.");
} else {
    let result = trailingZeros(number);
    alert("Number of trailing zeros in " + number + "! is: " + result);
}
