const prezzoKm = 0.21;
const scontoOver65 = .60;
const scontoUnder18 = .80;

const kmUtente = parseInt(prompt('Inserisci distanza (in km)'));
const ageUtente = parseInt(prompt(`Inserisci eta' (in anni)`));

calcolaPrezzo();

function calcolaPrezzo() {
    let costo = prezzoKm * kmUtente;
    if (ageUtente < 18 && !isNaN(ageUtente) && !isNaN(kmUtente)) {
        costo *= scontoUnder18
        alert(`Sconto Under 18 applicato. Il prezzo del biglietto e' di ${costo.toFixed(2)} €` )
    } else if (ageUtente > 65 && !isNaN(ageUtente) && !isNaN(kmUtente)) {
        costo *= scontoOver65
        alert(`Sconto Over 65 applicato. Il prezzo del biglietto e' di ${costo.toFixed(2)} €`)
        console.log(costo.toFixed(2))

    }else if(ageUtente >= 18 && ageUtente <= 65 && !isNaN(ageUtente) && !isNaN(kmUtente)) {
        alert(`Nessuno sconto applicato. Il prezzo del biglietto e' di ${costo.toFixed(2)} €`)

    }else{
        if(isNaN(ageUtente) && !isNaN(kmUtente)){
            alert(`L'eta' non e' stata inserita correttamente`)
        }else if(isNaN(kmUtente) && !isNaN(ageUtente)){
            alert( "I chilometri da percorrere non sono stati inseriti correttamente")

        }
    }
}