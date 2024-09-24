const checkGrandes = (grade) => {
    if (grade > 100 || grade < 0) {
        alert('Nota inválida');
        return false; 
    } 
    if (grade >= 90) {
        alert('Aluno nota A');
    } else if (grade >= 80) {
        alert('Aluno nota B');
    } else if (grade >= 70) {
        alert('Aluno nota C');
    } else if (grade >= 60) {
        alert('Aluno nota D');
    } else {
        alert('Aluno nota F');
    }
    return true;  
};
let isValid = false

while (!isValid) {
    const grade = prompt('Digite a nota do aluno (entre 0 e 100): ');
    isValid = checkGrandes(grade);
}