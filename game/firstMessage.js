import { getGlobal, setGlobal } from "../globals.js";
import { button } from "./button.js";

export function firstMessage(){
  //getting global variables
  const choiceDiv = getGlobal("choiceDiv");
  const storyDiv = getGlobal("storyDiv");
  const canvas = getGlobal("canvas");
  const music = getGlobal("music");
  let buttons = getGlobal("buttons");
  const backpack = getGlobal("backpack");
  const ctx = getGlobal("ctx");
  let hits = getGlobal("hits");
  const sound = getGlobal("sound");
  
  canvas.style.backgroundPosition = "0 0";
  //first message to start story, setting music, hiding the logo, etc.
  choiceDiv.innerHTML = "";
  storyDiv.innerHTML = "A message has come from the king. The messenger requests you read it at once!";
  canvas.style.backgroundImage = "url('Backgrounds/first.png')";
document.getElementById("logo").style.display = "none";
  music.src = "sounds/Title Theme.mp3";
  buttons = ["Read"];
  setGlobal("buttons", buttons);
button();
  
  //resetting for replay
  backpack.length = 0;
  hits = 0;
  setGlobal("hits", hits);
  ctx.clearRect(200, 100, 390, 339);
  sound.src = "";
}