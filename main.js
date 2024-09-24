const changeBackgroundColor = () => {
    const colors = [
        "red", "blue", "green", "yellow", "purple", "orange", "pink", "brown",
        "black", "white", "gray", "cyan", "magenta", "lime", "teal", "indigo",
        "violet", "gold", "silver", "beige", "maroon", "navy", "olive", "coral",
        "turquoise", "lavender", "peach", "mint", "crimson", "ivory", "khaki"
      ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = randomColor;
}