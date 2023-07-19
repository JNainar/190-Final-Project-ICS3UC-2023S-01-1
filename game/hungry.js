import { getGlobal, setGlobal } from "../globals.js";
import { button } from "./button.js";
import { defeated } from "./defeated.js";

export function hungry() {
  //getting global variables
  const canvas = getGlobal("canvas");
  const storyDiv = getGlobal("storyDiv");

  //running code before the character gets hungry
  canvas.style.backgroundImage = "url('Backgrounds/walking.png')";
  canvas.style.backgroundPosition = "0 0";
  let music = getGlobal("music");
  music.src = 'sounds/Title Theme.mp3';
  let backgroundPositionX = 0;
  let intervalId = setInterval(() => {
    if (backgroundPositionX > -300) {
      backgroundPositionX -= 0.5;
      canvas.style.backgroundPosition = backgroundPositionX + "px 0";
      setGlobal("charsource", "Run");
    } else {
      //once walking is done, initiate hunger
      clearInterval(intervalId);
      storyDiv.innerHTML = "Your stomach grumbles...";
      setGlobal("charsource", "Idle1");
      setTimeout(() => {
        foodCheck();
      }, 2000);
    }
  }, 10);
}

export function foodCheck() {
  //getting global variables
  const storyDiv = getGlobal("storyDiv");
  const backpack = getGlobal("backpack");
  const choiceDiv = getGlobal("choiceDiv");
  let buttons = getGlobal("buttons");
  
  setGlobal("charsource", "Idle1");
  
  //checking if user packed food
  if (backpack.includes("foodOption")) {
    storyDiv.innerHTML = "Phew! Good thing you packed food. That was delicious!";
    choiceDiv.innerHTML = "";
    buttons = ["Proceed"];
    setGlobal("buttons", buttons);
    button();
  } else {
    //code to run from not packing food
    storyDiv.innerHTML = "You passed out from not eating for the whole day. The animals in the forest ate you. Maybe pack food next time.";
    defeated(); 
  }
}