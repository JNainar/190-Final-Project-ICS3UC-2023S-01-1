import { getGlobal, setGlobal } from "../globals.js";
import { button } from "./button.js";

export function dragonGameplay() {
  //Getting the global variables
  const hits = getGlobal("hits");
  const storyDiv = getGlobal("storyDiv");
  const ctx = getGlobal("ctx");
  const choiceDiv = getGlobal("choiceDiv");
  let buttons = getGlobal("buttons");

  //Using the variable hits to determine if the dragon is defeated
  if (hits >= 5) {
    storyDiv.innerHTML =
      "You beat the dragon, but now your sword is too damaged to be used again. Hopefully you don't have to fight any more monsters.";
    choiceDiv.innerHTML = "";
    buttons = ["Keep Moving"];
    setGlobal("buttons", buttons);
    button();
    setGlobal("charsource", "Idle1");
    // characterAnimation();
    ctx.clearRect(200, 100, 390, 339);
  } 
  
  else {
    storyDiv.innerHTML = "Fight!";
    //Clear the choice div
    choiceDiv.innerHTML = "";
    
    //Create a sword button that will be used to fight
    buttons = ["Sword"];
    setGlobal("buttons", buttons);
    button();
  }
}
