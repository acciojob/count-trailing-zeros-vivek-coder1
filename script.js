function trailingZeros(n) {
  let count = 0;
  for (let i = 5; n / i >= 1; i *= 5) {
    count += Math.floor(n / i);
  }
  return count;
}

function getTrailingZeros() {
  const input = prompt("Enter a non-negative integer:");
  const number = parseInt(input);

  if (isNaN(number) || number < 0 || number > 10000) {
    alert("Please enter a valid number between 0 and 10000.");
    return;
  }

  const result = trailingZeros(number);
  alert(`Trailing zeros in ${number}! = ${result}`);
}
