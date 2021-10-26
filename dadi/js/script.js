/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

const gameWinner = document.getElementById("winner");


// Generiamo un numero random da 1 a 6 per il giocatore 
const playerNumber = Math.floor((Math.random() * 6) + 1);
console.log("Il numero generato per il giocatore è: " ,playerNumber);


// Generiamo un numero random da 1 a 6 per il PC 
const pcNumber = Math.floor((Math.random() * 6) + 1);
console.log("Il numero generato per il pc è: " , pcNumber);


// Stabiliamo chi ha vinto 
if (playerNumber > pcNumber){
    gameWinner.innerHTML = "Ha vinto il giocatore";
}else if (playerNumber < pcNumber){
    gameWinner.innerHTML = "Ha vinto il PC";
}else {
    gameWinner.innerHTML = "Non c'è nessun vincitore"
}