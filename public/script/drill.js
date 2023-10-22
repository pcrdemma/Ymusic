var audioElement = new Audio();
var drillSound = ["Loading.mp3", "Raspoutine.mp3","Starlight.mp3","Drill FR 4.mp3","For The Night.mp3"];
var currentSongTitle = drillSound[Math.floor(Math.random() * drillSound.length)].replace(".mp3", "");
var currentLife = 5;
var penduArray = [];
var testedLetters = []; // Ajoutez un tableau pour stocker les lettres testées

function playRandomSoundRap() {
    var soundFile = "/audio/drill/" + currentSongTitle + ".mp3";
    audioElement.src = soundFile;
    audioElement.play();

    penduArray = currentSongTitle.split("").map(char => (char === " " ? " " : "_"));
    updateCurrentSongTitleElement();
    updateLifeElement();
}

function compareInput() {
    var userInput = document.getElementById("userInput").value.toLowerCase();
    var matchFound = false;

    // Vérifiez si la lettre a déjà été testée
    if (testedLetters.includes(userInput)) {
        document.getElementById("userInput").value = "";
        return; // Sortez de la fonction si la lettre a déjà été testée
    }else if(checkword(userInput)){
        audioElement.pause();
       openPopupWin();
    }
    testedLetters.push(userInput); // Ajoutez la lettre testée au tableau

    for (let i = 0; i < currentSongTitle.length; i++) {
        if (userInput === currentSongTitle[i].toLowerCase()) {
            penduArray[i] = currentSongTitle[i];
            matchFound = true;
        }
    }

    // Enlèvement de vie
    if (!matchFound) {
        currentLife--; 
        updateLifeElement();
    }

    updateCurrentSongTitleElement();
    document.getElementById("userInput").value = "";

    // Vérification de la fin du jeu
    if (penduArray.indexOf("_") === -1) {
        audioElement.pause();
        openPopupWin();
    
    }

    // Vérifiez si le joueur a perdu (plus de vies)
    if (currentLife <= 0) {
        audioElement.pause();
        openPopupLoser();

    }

    // Mettez à jour l'élément "testedLetters" avec les lettres testées
    updateTestedLettersElement();
}

function checkword(userInput){
    if(userInput == currentSongTitle.toLowerCase()){
        return true;
        alert("gagné")
    }
}

function updateCurrentSongTitleElement() {
    var currentSongTitleElement = document.getElementById("currentSongTitle");
    currentSongTitleElement.textContent = "" + penduArray.join("");
}

function updateLifeElement() {
    var lifeElement = document.getElementById("currentLife");
        lifeElement.textContent = currentLife;
    

        for (let i = 1; i <= 5; i++) {
            var vinyleImage = document.getElementById("vinyle" + i);
            if (i <= currentLife) {
                vinyleImage.style.display = "inline-block";
            } else {
                // Masquer ou supprimer l'image du vinyle si la vie est perdue
                vinyleImage.style.display = "none"; 
            }
        }
}

//-----------------------------FUNCTION FOR THE POPUP-----------------------------

//déclaration de variables
let popupWin = document.getElementById("popup-winner");
let popupLoser = document.getElementById("popup-loser");

// Function to open the popup winner
function openPopupWin(){
    popupWin.style.display = "block";
    let popupSound = document.getElementById("winner");
    popupSound.play();
}

// Function to open the popup loser
function openPopupLoser(){
    popupLoser.style.display = "block";
    let popupSound = document.getElementById("loser");
    popupSound.play();
}

// Function to close the popups
function closePopupFunc() {
    popupWin.style.display = 'none';
    popupLoser.style.display = 'none';
    document.body.style.overflow = '';
}

let closePopup = document.getElementById('cross-close-popup');
closePopup.addEventListener('click', closePopupFunc);


function updateTestedLettersElement() {
    var testedLettersElement = document.getElementById("testedLetters");
    testedLettersElement.textContent = testedLetters; 
}


var playRandomRap = document.getElementById("playRandomRap");
playRandomRap.addEventListener("click", playRandomSoundRap);

var compareButton = document.getElementById("userInputcheck");
compareButton.addEventListener("click", compareInput);