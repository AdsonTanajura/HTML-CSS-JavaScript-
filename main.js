const valorConta = parseFloat(prompt('Digite o valor da conta'));
const darGojeta = parseFloat(prompt('Digite a gotjeta  (decimal)%:'));

const gorjeta = (valorConta * darGojeta) / 100;
const valorTotal = valorConta + gorjeta;

alert('O valor total com gotjeta é de $ ' + valorTotal);