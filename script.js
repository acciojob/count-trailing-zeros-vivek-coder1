function trailingZeros(n) {
    let count = 0;
    while (n >= 5) {
        n = Math.floor(n / 5);
        count += n;
    }
    return count;
}

const input = parseInt(prompt("Enter a non-negative integer:"), 10);
alert(trailingZeros(input));
