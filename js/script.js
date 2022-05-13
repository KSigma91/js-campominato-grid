/*  L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
    con difficoltà 1 => tra 1 e 100
    con difficoltà 2 => tra 1 e 81
    con difficoltà 3 => tra 1 e 49
    Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/


// debugger;
// chiedo all'utente a quale difficoltà vuole giocare
const sceltaDifficoltà = prompt("Scegli la difficoltà");

// se l'utente sceglie facile
for (let i = 0; i < 100; i++){
    let difficoltàFacile = parseInt(Math.floor(Math.random() * 100) + 1);
    let selezioneGriglia = document.getElementById("grid");
    let spawnCelle = document.createElement("square");
    spawnCelle.append(difficoltàFacile);
}

// se l'utente sceglie medio
for (let i = 0; i < 81; i++){
    let difficoltàMedio = parseInt(Math.floor(Math.random() * 81) + 1);
}


// se l'utente sceglie difficile
for (let i = 0; i < 49; i++){
    let difficoltàDifficile = parseInt(Math.floor(Math.random() * 49) + 1);
}













// in base alla difficoltà scelta, genero una griglia quadrata che conterrà le celle e il giocatore potrà fare la sua partita

// ogni cella conterrà un numero con un range direttamente proporzionale alla difficoltà scelta

// quando l'utente darà i suoi click, le celle si coloreranno di azzurro