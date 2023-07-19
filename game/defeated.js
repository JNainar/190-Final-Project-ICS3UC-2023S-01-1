import { getGlobal, setGlobal} from "../globals.js";
import { stopAnimation } from "./game.js";
import { button } from "./button.js";

export function defeated(){
  //getting global variables
  const canvas = getGlobal("canvas");
  const ctx = getGlobal("ctx");
  let buttons = getGlobal("buttons");
  const choiceDiv = getGlobal("choiceDiv");

//clears canvas and displays "defeated", try again button
ctx.clearRect(200, 100, canvas.width, canvas.height);
 canvas.style.backgroundImage = "url('Backgrounds/defeated.png')";
canvas.style.backgroundPosition = "0 0";
  choiceDiv.innerHTML = "";
  buttons = ["Try Again"];
    setGlobal("buttons", buttons);
    button();
  stopAnimation();
  ctx.clearRect(10, 390, 100, 74);
  const music = getGlobal("music");
  music.src = "";
  const sound = document.createElement('audio');
      sound.autoplay = true;
      sound.innerHTML = '<source src="sounds/lose.mp3" type="audio/mpeg">Your browser does not support the audio element.';
      document.body.appendChild(sound);
      setGlobal("sound", sound);
}