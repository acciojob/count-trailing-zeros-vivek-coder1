function trailingZeros(n) {
    let count = 0;
    // Count how many times 5 is a factor in numbers up to n
    for (let i = 5; n / i >= 1; i *= 5) {
        count += Math.floor(n / i);
    }
    return count;
}

// Take input from the user
const num = parseInt(prompt("Enter a non-negative integer:"), 10);

// Show the result using alert
alert(trailingZeros(num));
