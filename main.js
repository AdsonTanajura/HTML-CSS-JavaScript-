const frutas = ['maçã', 'banana', 'laranja', 'manga', 'uva', 'abacaxi', 'kiwi', 'morango', 'cereja', 'pera'];
const numberList = document.getElementById('numberList');

frutas.map(fruta => {
    const listItem = document.createElement('li');
    listItem.textContent = fruta;
    numberList.appendChild(listItem);

});
