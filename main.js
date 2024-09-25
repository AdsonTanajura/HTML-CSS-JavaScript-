const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const outputDiv = document.getElementById("output");

function showHigherNumber() {
  const num1 = Number(num1Input.value);
  const num2 = Number(num2Input.value);

  const higherNumber = (num1 > num2) ? num1 : num2;

  outputDiv.innerHTML = 'The higher number is ' + higherNumber
}
