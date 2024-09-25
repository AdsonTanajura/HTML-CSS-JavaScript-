const startInput = document.getElementById('start');
const endInput = document.getElementById('end');
const outputDiv = document.getElementById('output');

function showEvenNumbers() {
  const start = Number(startInput.value);
  const end = Number(endInput.value);

  let i = start;
  let output = [];

  while (i <= end) {
    i = i + 1;
    if (i % 2 !== 0) {
      output.push(i);
      outputDiv.innerHTML = output
    }
  }
  startInput.value = ' ';
  endInput.value = ' ';
}