/*Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere (che hai fatto tu precedentemente), stampa un messaggio appropriato sull’esito del controllo.
*/

const checkMessage =document.getElementById("messagge");

// Creo un array con le mail degli invitati 
const guestList = ["luca.bianco@gmail.com" , "elisa.filippi@gmail.com" , "maria.magri@yahoo.com" , "alessandro.verdi@gmail.com" , "giovanni.rossi@yahoo.com" , "elisabetta.rizzo@gmail.com"];
for (let i = 0; i < guestList.length; i++){
    console.log(guestList[i]);
}


// Chiedo all'utente di inserire la sua mail
let userEmail = prompt("Inserici la tua email");
console.log("L'email inserita dall'utente è:" , userEmail);

// Controllo se può accedere o meno 
for (let i = 0; i < guestList.length; i++){
    // Se la sua mail è nell'array creato allora può entrare 
    if (userEmail === guestList[i]){
        checkMessage.innerHTML= ("Ok, sei nella lista degli invitati. Puoi accedere.");
    }else{
        // Se la sua mail non è presente nell'array non può entrare 
        checkMessage.innerHTML= ("Non risulti presente nella lista degli invitati. Mi dispiace, non puoi accedere.");
    }
}


