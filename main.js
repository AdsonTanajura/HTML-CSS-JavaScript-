const images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
];

const container = document.getElementById('image-list');

        // Usando map para criar um array de divs e imgs
        const imageElements = images.map(src => {
            const div = document.createElement('div');
            div.classList.add("image-container")
            const img = document.createElement('img');
            
            img.src = src;
            img.alt = 'Imagem';
            
            div.appendChild(img);
            return div;  // Retorna o div criado
        });

        // Adiciona cada div ao container
        imageElements.forEach(div => container.appendChild(div));