// 1. rifare esercizio biglietto treno

// 2. creare una funzione che calcola il prezzo del biglietto (prezzo * km * sconto età)
// 3. generare una funzione che mi calcola il numero random in un intervallo
// 4. al click del pulsante genera stampare i risultati nella sezione bottom
// 4.0 devo acquisire le variabili da input
// 4.1 aggiungere classe show alla sezione bottom (inizialmente hidden)
// 4.2 aggiungere animazione al click
// 5. al click di annulla ripulire il form
// 5.1 aggiungere classe hidden alla sezione bottom (per farla tornare hidden)

// al click di un bottone appare un alert

/* evento al click del bottone genera */
document.getElementById("genera").addEventListener("click", function () {
  var nome = document.getElementById("nomeIns").value;
  var km = document.getElementById("kmIns").value;
  var eta = document.getElementById("etaIns").value;

  var prezzo = prezzoTicket(km, eta);
  document.getElementById("nomePass").innerHTML = nome;
  document.getElementById("prezzo").innerHTML = prezzo;
  document.getElementById("sconto").innerHTML = etaOff(eta);
  document.getElementById("carrozza").innerHTML = numRandom(1, 10);
  document.getElementById("code").innerHTML = numRandom(90000, 99999);

  var sezione = document.getElementById("sezioneTicket");
  sezione.classList.remove("hidden");
  sezione.classList.add("show");
});

/* evento al click del bottone annulla */
document.getElementById("annulla").addEventListener("click", function () {
  var sezione = document.getElementById("sezioneTicket");
  sezione.classList.remove("show");
  sezione.classList.add("hidden");

  /* reset */
  document.getElementById("nomeIns").value = "";
  document.getElementById("kmIns").value = 0;
  document.getElementById("etaIns").value = "Minorenne";
});

/* prova */
console.log(prezzoTicket(10, "over"));
console.log(numRandom(90000, 99999));
console.log(etaOff("mag"));
/* fine prova */

/* funzioni */

// funzione calcolo prezzo biglietto
function prezzoTicket(km, eta) {
  var price = km * 0.21;
  if (eta == "min") {
    price = price * 0.8;
  } else if (eta == "over") {
    price = price * 0.6;
  }
  return price.toFixed(2);
}

// funzione genera Random tra 2 intervalli
function numRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// funzione converti età in offerta

function etaOff(str) {
  switch (str) {
    case "min":
      return "Sconto - 20%";
      break;
    case "over":
      return "Sconto - 40%";
      break;

    default:
      return "Prezzo intero";
      break;
  }
}
