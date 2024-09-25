let display = document.getElementById("display-number");
let soma = 0;
display.innerHTML = soma;

const add = () => {
    soma = soma + 1;
    display.innerHTML = soma;
};

const remove = () => {
    soma = soma - 1;
    display.innerHTML = soma;
};

const reset = () => {
    display.innerHTML = 0;
};