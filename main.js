const idade = prompt('Quantos anos você tem ?: ');
const temTitulo = prompt('Você tem titlo? (sim/não) ').toLocaleLowerCase();
const idadeMinima = 18;

if (idade >= idadeMinima && temTitulo == 'sim') {
    console.log('Vocé pode votar :)');
}
else if (idade >= idadeMinima && idadeMinima =='não') {
    console.log('Vocé precisa de um titlo para votar :<');

}
else if ((idade < idadeMinima && temTitulo == 'sim') || (temTitulo == 'nao')) {
    console.log('Você nao tem a idade minina para votar');
}
