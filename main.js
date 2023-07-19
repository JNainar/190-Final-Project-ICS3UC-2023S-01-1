import { loadGame } from "./game/loadGame.js";
import { loadImages } from "./utils/loadImages.js"

// // Get Playbutton
let playButton = document.getElementById("playButton");

// Load the character images

loadImages().then(characterImages => {
    console.log("All images loaded!");
    playButton.innerHTML = "BEGIN YOUR ADVENTURE!"
    // You can now access images like this: characterImages["Attack1"][0]
}).catch(error => {
    console.error("An error occurred while loading images:", error);
});



playButton.onclick = function() {
    start();
}

function start() {
    //Showing the introduction paragraph
    let intro = document.getElementById("intro");
    intro.style.display = "none";
    //Displaying the play button
    playButton.style.display = "none";
    //Loading the game
    loadGame();
};