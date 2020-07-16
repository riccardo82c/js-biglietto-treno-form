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

  /* var utente = document.getElementById("utente");
  utente.innerHTML = valore;
  utente.classList.remove("hidden");
  utente.classList.add("show");
 */
  /* utente.className = 'show'; */
});

/* evento al click del bottone annulla */
/* document.getElementById("annulla").addEventListener("click", function () {
  var utente = document.getElementById("utente");
  utente.className = "hidden";

  //   utente.classList.remove("show");
  //   utente.classList.add("hidden");
}); */

/*  */

/* funzioni */

console.log(prezzoTicket(10, "over"));
console.log(numRandom(90000, 99999));

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
