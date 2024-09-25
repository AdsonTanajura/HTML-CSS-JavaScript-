const images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
]
let currentIndex = 0;

const imageElement = document.getElementById('image');
const buttonElement = document.getElementById('button');

buttonElement.addEventListener('click', () => {
    currentIndex = currentIndex + 1;
    if (currentIndex >= images.length){
        currentIndex = 0
    }
    imageElement.src = images[currentIndex];
})