const checkButton = document.getElementById('check-button');
const ageInput = document.getElementById('age-input');

checkButton.addEventListener('click', () => {
   const age = ageInput.value;
   console.log(age);
   const message = (age >= 18) ? 'You are and adult' : 'You are not adult';
   alert(message);
})