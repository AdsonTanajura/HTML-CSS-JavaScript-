const colorList = [];

for (let i = 1; i <= 3; i++) {
    let useColor = prompt('Digite a cor numero ' + i);
    colorList.push(useColor);
}

document.getElementById("listcolor").innerHTML = colorList;