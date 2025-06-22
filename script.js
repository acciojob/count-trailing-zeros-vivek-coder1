function trailingZeros(n) {
  let count = 0;
  for (let i = 5; n / i >= 1; i *= 5) {
    count += Math.floor(n / i);
  }
  return count;
}

// Input from user via prompt
const input = prompt("Enter a non-negative integer:");

// Validate input and show output via alert
if (input !== null && !isNaN(input) && Number(input) >= 0) {
  alert("Number of trailing zeros in " + input + "! is: " + trailingZeros(Number(input)));
} else {
  alert("Please enter a valid non-negative integer.");
}
