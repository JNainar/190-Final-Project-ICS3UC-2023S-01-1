import { getGlobal, setGlobal } from "../globals.js";
import { button } from "./button.js";
import { dragonGameplay } from "./dragonGameplay.js";
import { defeated } from "./defeated.js";

export function dragon() {
  //getting global variables
  const storyDiv = getGlobal("storyDiv");
  let buttons = getGlobal("buttons");
  const canvas = getGlobal("canvas");
  const ctx = getGlobal("ctx");
  const music = getGlobal("music");

  setGlobal("charsource", "Run");

  //Moving the background to make it seem like walking
  canvas.style.backgroundImage = "url('Backgrounds/walking.png')";
  canvas.style.backgroundPosition = "-200 0";
  let backgroundPositionX = 0;
  let intervalId = setInterval(() => {
    if (backgroundPositionX > -300) {
      backgroundPositionX -= 0.5;
      canvas.style.backgroundPosition = backgroundPositionX + "px 0";
    } else {
      clearInterval(intervalId);
    }
  }, 10);

  //Displaying the dragon sequence after an amount of time
  setTimeout(() => {
    //changing music
    music.src = "sounds/Exploring The Unknown.mp3";

    //Displaying the message that there is a dragon
    storyDiv.innerHTML =
      "It's a dragon! Run for your lives, ahhhhhh!!! Or do you think you can fight it????";
    setGlobal("charsource", "Idle1");
    //Create the dragon image
    const characterUrl = "dragon.png";
    const characterImage = new Image();
    characterImage.onload = function() {
      // Get the canvas context and draw the image
      ctx.drawImage(characterImage, 200, 100, 390, 339);
    };
    characterImage.src = characterUrl;

    //Giving the options to fight or escape
    buttons = ["Fight", "Escape"];
    setGlobal("buttons", buttons);
    button();
  }, 6300);
}

//The function for the fight dragon option
export function fightDragon() {
  //getting global variables
  const storyDiv = getGlobal("storyDiv");
  const choiceDiv = getGlobal("choiceDiv");
  const backpack = getGlobal("backpack");
  const music = getGlobal("music");

  storyDiv.innerHTML =
    "Let's fight this dragon! Get your weapons and be ready to attack!";
  choiceDiv.innerHTML = "";
  if (backpack.includes("weaponsOption")) {
    //Runs dragonGameplay only if there are weapons
    dragonGameplay();
  }

  else {
    // If the user chooses to fight the dragon but doesnt have weapons they die
    storyDiv.innerHTML =
      "You were supposed to slay the dragon, not let the dragon slay you... You should've brought weapons.";
    const sound = document.createElement('audio');
    sound.autoplay = true;
    sound.innerHTML = '<source src="sounds/dragonroar.mp3" type="audio/mpeg">Your browser does not support the audio element.';
    document.body.appendChild(sound);
    setGlobal("sound", sound);
    music.src = '';
    defeated();
  }
}

//Code for escape option
export function escapeDragon() {
  const storyDiv = getGlobal("storyDiv");
  const canvas = getGlobal("canvas");
  const choiceDiv = getGlobal("choiceDiv");
  let buttons = getGlobal("buttons");
  const ctx = getGlobal("ctx");
  const music = getGlobal("music");

  //moving background
  storyDiv.innerHTML = "Run for your lives! Ahhhhhh!";
  let backgroundPositionX = -399.5;
  choiceDiv.innerHTML = "";
  let intervalId = setInterval(() => {
    if (backgroundPositionX < -200) {
      backgroundPositionX += .5;
      canvas.style.backgroundPosition = backgroundPositionX + "px 0";
      setGlobal("charsource", "Run");
    }

    else {
      clearInterval(intervalId);
      setGlobal("charsource", "Idle1");
    }
  }, 2);


  //Using setTimeout to space out the events
  setTimeout(() => {
    //A chance between 0 - 10 of surviving
    let chance = Math.floor(Math.random() * 11);
    console.log("chance:", chance);
    //If the chance is 7 or higher, user survives
    if (chance >= 7) {
      storyDiv.innerHTML = "You survived!";
      choiceDiv.innerHTML = "";
      buttons = ["Keep Moving"];
      setGlobal("buttons", buttons);
      button();
      ctx.clearRect(200, 100, 390, 339);
      setGlobal("charsource", "Idle1");
    } 
    
    else {
      //Otherwise user dies
      storyDiv.innerHTML = "Why did you think you can outrun a dragon!?";
      const sound = document.createElement('audio');
      sound.autoplay = true;
      sound.innerHTML = '<source src="sounds/dragonroar.mp3" type="audio/mpeg">Your browser does not support the audio element.';
      document.body.appendChild(sound);
      music.src = '';
      setGlobal("sound", sound);
      setGlobal("charsource", "Idle1");
      defeated();
    }
  }, 3000);
}
