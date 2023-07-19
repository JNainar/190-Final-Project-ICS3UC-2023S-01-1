import { getGlobal, setGlobal } from "../globals.js";
import { button } from "./button.js";
import { defeated } from "./defeated.js";

export function cave() {
  //getting global variables
  const choiceDiv = getGlobal("choiceDiv");
  let buttons = getGlobal("buttons");
  const canvas = getGlobal("canvas");
  const music = getGlobal('music');
  const storyDiv = getGlobal("storyDiv");

  choiceDiv.innerHTML = "";
  
  //changing the music 
  music.src = 'sounds/Mysterious Dungeon.mp3';

  //background change
  canvas.style.backgroundImage = "url('Backgrounds/walkingcave.png')";
  canvas.style.backgroundPosition = "50 0";

  let backgroundPositionX = 0;
  let intervalId = setInterval(() => {
    if (backgroundPositionX > -400) {
      backgroundPositionX -= 0.5;
      canvas.style.backgroundPosition = backgroundPositionX + "px 0";
      storyDiv.innerHTML = "";
      setGlobal("charsource", "Run");
    }

    else {
      clearInterval(intervalId);
      setTimeout(() => {
        storyDiv.innerHTML = "It looks like this cave leads to Ravenville, but do you think it's safe?";
        buttons = ["Safe", "Looks Dangerous"];
        setGlobal("buttons", buttons);
        button();
        setGlobal("charsource", "Idle1");
      }, 400);
    }
  }, 10);


}

export function safeCave() {
  //getting global variables
  const storyDiv = getGlobal("storyDiv");
  const backpack = getGlobal("backpack");
  const choiceDiv = getGlobal("choiceDiv");
  let buttons = getGlobal("buttons");
  const canvas = getGlobal("canvas");
  storyDiv.innerHTML = "Then let's go in!";
  
  //Checking for the torch
  if (backpack.includes("torchOption")) {

    //if user has a torch, they get through the cave and can enter the kingdom
    storyDiv.innerHTML = "Thanks to your torch, you were able to keep the monsters inside the cave away from you just in time to make it out. You're just oustide the kingdom now. Go deliver the message!";
    choiceDiv.innerHTML = "";
    buttons = ["Enter Kingdom"];
    setGlobal("buttons", buttons);
    button();
    canvas.style.backgroundImage = "url('Backgrounds/kingdomentry.png')";
    canvas.style.backgroundPosition = "0 0";
  } else {
    storyDiv.innerHTML = "The monsters in the cave attacked you. Maybe if you brought a torch you could have kept them away.";
    defeated();
    
  }
}

export function caveDanger() {
  //Getting the global variables
  const storyDiv = getGlobal("storyDiv");
  const choiceDiv = getGlobal("choiceDiv");
  let buttons = getGlobal("buttons");
  const canvas = getGlobal("canvas");
  storyDiv.innerHTML = "Let's try and find another way around, but I don't know if there are more monsters lurking!";
  
  //Using chance to determine if the user has survived or not
  let chance = Math.floor(Math.random() * 11);
  if (chance >= 4) {
    storyDiv.innerHTML = "You survived! You're just oustide the kingdom now. Go deliver the message!";
    choiceDiv.innerHTML = "";
    buttons = ["Enter Kingdom"];
    setGlobal("buttons", buttons);
    canvas.style.backgroundImage = "url('Backgrounds/kingdomentry.png')";
    canvas.style.backgroundPosition = "0 0";
    button();
  } 
  else {
    //character dies and try again button shows
    storyDiv.innerHTML = "The monsters jumped out from a bush and you died."
    defeated();
  }
}