// Calcolo del prezzo del biglietto del treno

// 1) numero km che utente vuole percorrere

const numeroKm = parseFloat(prompt("km che vuoi percorrere")); //number

// 2) Età passeggero

const etàPasseggero = parseFloat(prompt("Età")); //number

// 3) Prezzo totale del viaggio
 
//    Prezzo biglietto intero in base ai km (0.21 euro al km)

const prezzoIntero = numeroKm * 0.21; //number

    
// 4) Stampare output prezzo in console con max due decimali

    
if (etàPasseggero <= 17){                                        

    //    Prezzo e stampa biglietto scontato (20% se minorenne)

    const scontoMinorenne = prezzoIntero * 0.20; //number 
    const prezzoFinaleMinorenne = prezzoIntero - scontoMinorenne                

    console.log("Il prezzo del biglietto è " + prezzoFinaleMinorenne.toFixed(2) + " Euro"); //string

} 

else if (etàPasseggero >= 65) {

   // Prezzo e stampa biglietto scontato (40% per over 65)               

    const scontoOver = prezzoIntero * 0.40; //number            
    const prezzoFinaleOver = prezzoIntero - scontoOver

    console.log("Il prezzo del biglietto è " +  prezzoFinaleOver.toFixed(2) + " Euro"); //string

    // Stampa biglietto èrezzo intero

} else{
    console.log("Il prezzo del biglietto è " +  prezzoIntero.toFixed(2) + " Euro"); //string
}
