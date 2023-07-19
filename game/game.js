import { character } from "./character.js";
import { firstMessage } from "./firstMessage.js";
import { getGlobal } from "../globals.js";

let animationId = null;
let running = false;

//function to run when starting the game, resetting necessary parts and running the first message
export function startGame() {
  const ctx = getGlobal("ctx");
  const canvas = getGlobal("canvas");
  stopAnimation();
  ctx.clearRect(10, 390, canvas.height, canvas.width);
  canvas.style.backgroundImage = "url('Backgrounds/first.png')";
  characterAnimation();
  firstMessage();
}

//generating the character animation frames
export function characterAnimation() {
  running = true;
  let charsource = getGlobal("charsource");
  const ctx = getGlobal("ctx");
  ctx.clearRect(10, 390, 100, 74);
  character(charsource, 10);
  if (running) {
    animationId = requestAnimationFrame(characterAnimation);
  }
}

//stopping the character from being drawn/animated
export function stopAnimation() {
  running = false;
  cancelAnimationFrame(animationId);
}