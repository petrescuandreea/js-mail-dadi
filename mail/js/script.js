/*Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere (che hai fatto tu precedentemente), stampa un messaggio appropriato sull’esito del controllo.
*/


// Creo un array con le mail degli invitati 
const guestList = ["luca.bianco@gmail.com" , "elisa.filippi@gmail.com" , "maria.magri@yahoo.com" , "alessandro.verdi@gmail.com" , "giovanni.rossi@yahoo.com" , "elisabetta.rizzo@gmail.com"];
for (let i = 0; i < guestList.length; i++){
    console.log(guestList[i]);
}


// Chiedo all'utente di inserire la sua mail
let userEmail = prompt("Inserici la tua email");

// Controllo se può accedere o meno 

// Se la sua mail è nell'array creato allora può entrare 

// Se la sua mail non è presente nell'array non può entrare 

