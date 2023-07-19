import { getGlobal, setGlobal } from "../globals.js";
import { button } from "./button.js";

export function finish() {
  //getting global variables
  let buttons = getGlobal("buttons");
  const canvas = getGlobal("canvas");
  const storyDiv = getGlobal("storyDiv");
  const choiceDiv = getGlobal("choiceDiv");
  const music = getGlobal("music");

  music.src = 'sounds/Title Theme.mp3';

  //final button change, background change, and story finale to finish off story
  choiceDiv.innerHTML = "";
  storyDiv.innerHTML = "";
  canvas.style.backgroundImage = "url('Backgrounds/castlebg.jpg')";
  let backgroundPositionX = 0;
  let intervalId = setInterval(() => {
    if (backgroundPositionX > -500) {
      backgroundPositionX -= 0.5;
      canvas.style.backgroundPosition = backgroundPositionX + "px 0";
      setGlobal("charsource", "Run");
    } else {
      clearInterval(intervalId);

      setTimeout(() => {
        storyDiv.innerHTML = "You made it to the kingdom! The General of Defense is grateful for the message. Good thing you got it to him just in time. Press Play Again to play the game again. (Try out the different possibilities!)";
        buttons = ["Play Again"];
        setGlobal("buttons", buttons);
        button();
        setGlobal("charsource", "Idle1");
      }, 700);
    }
  }, 10);
}