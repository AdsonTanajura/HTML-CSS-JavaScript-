const numberList = document.getElementById('numberList');

for (let i = 1; i <= 5; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = 'Item ' + i;
    numberList.appendChild(listItem);
}