// Calcolo del prezzo del biglietto del treno

// 1) numero km che utente vuole percorrere

const numeroKm = parseFloat(prompt("km che vuoi percorrere")); //number

// 2) Età passeggero

const etàPasseggero = parseFloat(prompt("Età")); //number

// 3) Prezzo totale del viaggio
 
//    Prezzo biglietto intero in base ai km (0.21 euro al km)

const prezzoIntero = numeroKm * 0.21; //number

//    Prezzo biglietto scontato (20% se minorenne o 40% per over 65)

 const prezzoScontatoMinorenne = prezzoIntero * 0.20; //number
 const prezzoScontatoOver = prezzoIntero * 0.40; //number
    
// 4) Stampare output prezzo in console con max due decimali

if (etàPasseggero <= 17){
    console.log("Il prezzo del biglietto è " + prezzoScontatoMinorenne); //string

} 

else if (etàPasseggero >= 65) {
    console.log("Il prezzo del biglietto è " + prezzoScontatoOver); //string
}

