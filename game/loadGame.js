import { setGlobal } from "../globals.js";
import { startGame } from "./game.js";
export function loadGame() {
  //getting the gameplay div and clearing it
  const gameplay = document.getElementById("gameplay");
  gameplay.innerHTML = "";

  //creating the story div
  const storyDiv = document.createElement('div');
  storyDiv.id = "storyDiv";
  gameplay.appendChild(storyDiv);

  //hiding the game intro div
  const gameIntro = document.getElementById("gameIntro");
 gameIntro.style.display = "none";
  
  //Creating the canvas
  const canvas = document.createElement("canvas");
  canvas.width = 500;
  canvas.height = 500;
  canvas.id = "mainCanvas";
  gameplay.appendChild(canvas);
  const ctx = canvas.getContext("2d");

  //creating the choice div
  const choiceDiv = document.createElement('div');
  choiceDiv.id = "choiceDiv";
  gameplay.appendChild(choiceDiv);

  //creating the music element
  const music = document.createElement('audio');
music.autoplay = true;
  music.loop = true;
music.innerHTML = '<source src="sounds/Title Theme.mp3" type="audio/mpeg">Your browser does not support the audio element.';
  document.body.appendChild(music);
  
  //setting the global variables
  setGlobal('canvas', canvas);
  setGlobal('ctx', ctx);
setGlobal("music", music);
  setGlobal('choiceDiv', choiceDiv);
  setGlobal('storyDiv', storyDiv);
  
  //Starting the game
  startGame();

}