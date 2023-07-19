import { getGlobal } from "../globals.js";
import { readButton, closeButton, packButton, startAdvent, fightDragonButton, escapeDragonButton, walkingButton, caveButton, safeCaveButton, caveDangerButton, finishButton, swordClick} from "./buttonClick.js";
import { startGame } from "./game.js";

export function button() {
  //getting global variables
  const choiceDiv = getGlobal("choiceDiv");
  const buttons = getGlobal("buttons");

  // Creates the buttons and the functions to run in response to when they are clicked
  buttons.forEach((choice) => {
    const button = document.createElement("button");
    button.id = choice;
    button.className = "button";
    button.innerHTML = choice;
    choiceDiv.appendChild(button);

    if (choice === "Read") {
      button.onclick = function() {
        readButton();
      }
    }
    if (choice === "Close") {
      button.onclick = function() {
        closeButton();
      }
    }
    if (choice === "Pack") {
      button.onclick = function() {
        packButton();
      }
    }
    //Done packing function to first check if the bag is overfilled or not
    if (choice === "Done Packing") {
      button.onclick = function() {
        const backpack = getGlobal("backpack");
        if (backpack.length <= 3) {
          startAdvent();
        } else {
          const storyDiv = getGlobal("storyDiv")
          storyDiv.innerHTML = "You can't fit everything in your bag. Try removing some things so you only have 3 things inside.";
        }
      }
    }

    if (choice === "Fight") {
      button.onclick = function() {
        fightDragonButton();
      }
    }
    if (choice === "Escape") {
      button.onclick = function() {
        escapeDragonButton();
      }
    }
    if (choice === "Keep Moving") {
      button.onclick = function() {
        walkingButton();
      }
    }
    if ((choice === "Try Again") || (choice === "Play Again")) {

      button.onclick = function() {
        startGame();
        // stopAnimation();
      }
    }
    if (choice === "Safe") {
      button.onclick = function() {
        safeCaveButton();
      }
    }
    if (choice === "Looks Dangerous") {
      button.onclick = function() {
        caveDangerButton();
      }
    }
    if (choice === "Proceed") {
      button.onclick = function() {
        caveButton();
      }
    }
    if (choice === "Enter Kingdom") {
      button.onclick = function() {
        finishButton();
      }
    }
    if (choice === "Sword") {
      button.onclick = function() {
        swordClick();
      }
    }
    
  });
}