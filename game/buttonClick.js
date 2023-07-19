import { getGlobal, setGlobal } from "../globals.js";
import { button } from "./button.js";
import { packing } from "./packing.js";
import { fightDragon, dragon, escapeDragon } from "./dragon.js";
import { hungry } from "./hungry.js";
import { cave, safeCave, caveDanger } from "./cave.js";
import { finish } from "./finish.js";
import { dragonGameplay } from "./dragonGameplay.js";
import { characterAnimation, stopAnimation} from "./game.js";

// Actions to be taken after each button is clicked. More complex functions such as packing have their own file, but simple functions like reading the scroll is executed here.

//Reading the scroll
export function readButton() {
  //getting global variables needed
  const choiceDiv = getGlobal("choiceDiv");
  const canvas = getGlobal("canvas");
  let buttons = getGlobal("buttons");
  const storyDiv = getGlobal("storyDiv");
  const ctx = getGlobal("ctx");

  // updating story, background, and buttons
  storyDiv.innerHTML = "Read with haste. I sense an adventure ahead!";
  canvas.style.backgroundImage = "url(Backgrounds/scroll.png)";
  canvas.style.backgroundColor = "black";
  choiceDiv.innerHTML = "";
  ctx.clearRect(10, 370, 100, 100);
  buttons = ["Close"];
  setGlobal("buttons", buttons);
  button();
  stopAnimation();
  
}

//Closing the scroll
export function closeButton() {
  //getting global variables needed
  const choiceDiv = getGlobal("choiceDiv");
  const canvas = getGlobal("canvas");
  let buttons = getGlobal("buttons");
  const storyDiv = getGlobal("storyDiv");

  // updating story, background, and buttons
  storyDiv.innerHTML = "You need to deliver that message. Looks like it'll be a long journey. Let's go pack!";
  canvas.style.backgroundImage = "url('Backgrounds/first.png')";
  choiceDiv.innerHTML = "";
  buttons = ["Pack"];
  setGlobal("buttons", buttons);
  button();
  characterAnimation();
}

//Switching from the outside to the bookshelf and initiating the packing function
export function packButton() {
  //getting global variables
  const choiceDiv = getGlobal("choiceDiv");
  const storyDiv = getGlobal("storyDiv");
  const canvas = getGlobal("canvas");
  const ctx = getGlobal("ctx");

  // updating story, background, and running the packing function
  choiceDiv.innerHTML = "";
  storyDiv.innerHTML = "It's time to pack for the journey. Choose the items you wish to bring with you. Remember that your bag only fits 3 items at the max, so choose wisely!";
  canvas.style.backgroundImage = "url('bookshelf.png')";
  ctx.clearRect(10, 370, 100, 100);
  packing();
  stopAnimation();
}

//Adventure begins, music change, and dragon function is run
export function startAdvent() {
  //getting global variables
  const music = getGlobal('music');
  const choiceDiv = getGlobal("choiceDiv");
  const canvas = getGlobal("canvas");
  const storyDiv = getGlobal("storyDiv");
  //changing the music, resetting the flex direction of the choice div, updating the background, and running dragon function
  music.src = 'sounds/Prepare For Battle!.mp3';
  choiceDiv.style.flexDirection = "row";
  choiceDiv.innerHTML = "";
  canvas.style.backgroundImage = "url('Backgrounds/first.png')";
  storyDiv.innerHTML = "The adventure has begun. Be on the look out, you never know what might be lurking in the forest.";
  characterAnimation();
  dragon();
}

//function to run if the user chooses to fight the dragon
export function fightDragonButton() {
  fightDragon();
}
//function to run if the user chooses to run from the dragon
export function escapeDragonButton() {
  escapeDragon();
}

//function to run after the dragon is defeated or escaped from, intiates the hungry function
export function walkingButton() {
  //getting global variables
  const music = getGlobal('music');
  const choiceDiv = getGlobal("choiceDiv");
  const canvas = getGlobal("canvas");
  const storyDiv = getGlobal("storyDiv");

  music.src = 'The Icy Cave.mp3';
  choiceDiv.innerHTML = "";
  canvas.style.backgroundImage = "url('background.png')";
  storyDiv.innerHTML = "Time to continue on your journey!";
  hungry();
}

//user reaches the cave after eating food
export function caveButton() {
  cave();
}
//function if the user chooses that the cave is safe
export function safeCaveButton() {
  safeCave();
}
//function for is user chooses that the cave is dangerous
export function caveDangerButton() {
  caveDanger();
}
//function of reaching the kingdom, entering
export function finishButton() {
  finish();
}

//during the dragon fight, when the user presses the sword button to fight
export function swordClick() {
  //getting global variable to count number of hits based on the button click
  let hits = getGlobal("hits");
  hits += 1;
  setGlobal("hits", hits);

  //reruns the dragon gameplay function so when the max hits are done the function moves on
  dragonGameplay();

  //plays sword sound for each hit
  const sound = document.createElement('audio');
  sound.autoplay = true;
  sound.innerHTML = '<source src="sounds/sword.mp3" type="audio/mpeg">Your browser does not support the audio element.';
  document.body.appendChild(sound);
  setGlobal("sound", sound);
setGlobal("charsource", "Attack1");
  
  setTimeout(() => {
    setGlobal("charsource", "Idle2");
  }, 1500)
}
