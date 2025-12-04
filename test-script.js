// Chiedere età e chilometri da percorrere all'untente e elaborare il prezzo del biglietto

// Fisso i dati sulla base dei quali elaborare il costo del biglietto
    // Fisso tariffa base al chilometro (0,21€/km)
    const prezzoKm = 0.21;
    // Ai minorenni si applica uno sconto del 20%
    const scontoUnder18 = 0.8;
    // Agli over 65 si applica uno sconto del 40%
    const scontoOver65 = 0.6;

// INPUT (variabili e dati input)
    // Chiedo all'utente i km da percorrere (salvataggio dato)
    const inputKm = parseInt(prompt("Quanti chilometri devi percorrere?"));
    
    // Chiedo età utente (salvataggio dato)
    const userAge = parseInt(prompt("Quanti anni hai?"));
    console.log(inputKm, userAge);
    
// ELABORAZIONE
    // Calcola tariffa standard in base ai km che vuole percorrere l'utente
    const prezzoStandard = prezzoKm * inputKm;
    console.log("questo è il prezzo standard", prezzoStandard.toFixed(2), "€");
    
    // APPLICA SCONTISTICA LADDOVE PREVISTA
        // Se l'età dell'utente è inferiore ai 18 anni
        // Il programma deve applicare lo sconto del 20%
    if (userAge < 18) {
        const prezzo = prezzoStandard * scontoUnder18;
        console.log("Hai diritto ad uno sconto! Questo è il tuo prezzo" , prezzo.toFixed(2) , "€");
    }
    // Se l'età dell'utente è maggiore/uguale ai 65 anni
        // Il programma deve applicare lo sconto del 40%
    else if(userAge > 64) {
        const prezzo = prezzoStandard * scontoOver65;
        console.log("Hai diritto ad uno sconto! Questo è il tuo prezzo" , prezzo.toFixed(2) , "€");
    }
        
