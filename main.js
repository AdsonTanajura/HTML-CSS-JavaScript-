const randomNumber = Math.floor(Math.random() * 100);
let tries = 0;


const checkGuess = () => {
    const guess = document.getElementById('guess').value;
    const message = document.getElementById('message');
    tries = tries + 1;


    if (guess == randomNumber) {
        message.innerHTML = 'Congratulations, you guessed the number in ' + tries + '!';
    }
    else if (guess < randomNumber) {
        message.innerHTML = 'Too low. Try again!';
    }
    else {
        message.innerHTML = 'Too high. Try again!';
    };

};