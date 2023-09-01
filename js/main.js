// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Consiglio: gestite bene il tempo. si può sempre tornare in seguito a migliorare la grafica, ma dedicargli molto tempo da subito può farvi rimanere indietro.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l'array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l'immagine corrispondente.
// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l'immagine attiva dovrà cambiare alla successiva.
// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

let container = document.getElementById("slides-container");
let activeGame = 0;

// ciclo l array
images.forEach((game, index) => {
  // per ogni elemento nell array creo un nuovo elemento da aggiungere all HTML
  const gameSelected = document.createElement("div");
  gameSelected.classList.add("slide");
  //aggiungo active alla slide corrispondente all indice
  if (index == activeGame) gameSelected.classList.add("active");

  gameSelected.innerHTML = `<img src="./${game.image}" alt="" />
  <div class="text-center">
    <h2>${game.title}  </h2>
    <p>
      ${game.text}
    </p>`;

  // aggiungo un nuovo elemento agli oggetti
  game.gameActive = gameSelected;
  //lo aggiungo all HTML
  container.append(gameSelected);
});

let goNext = document.getElementById("next");
goNext.addEventListener("click", nextButton);

function nextButton() {
  const oldGame = images[activeGame].gameActive;
  oldGame.classList.remove("active");
  activeGame++;
  // aggiungo il ciclo infinito al carosello
  if (activeGame >= images.length) activeGame = 0;
  const newGame = images[activeGame].gameActive;
  newGame.classList.add("active");
  console.log(newGame);
}
let goPrev = document.getElementById("prev");
goPrev.addEventListener("click", prevButton);

function prevButton() {
  const oldGame = images[activeGame].gameActive;
  oldGame.classList.remove("active");
  activeGame--;
  const newGame = images[activeGame].gameActive;
  newGame.classList.add("active");
  console.log(newGame);
}
