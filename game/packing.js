import { getGlobal, setGlobal } from "../globals.js";
import { button } from "./button.js";

export function packing() {
  //getting global variables
  const canvas = getGlobal("canvas");
  const backpack = getGlobal("backpack");
  const choiceDiv = getGlobal("choiceDiv");
  let buttons = getGlobal("buttons");
  
  //setting the background to the bookshelf
  canvas.style.backgroundImage = "url('Backgrounds/packingbg.png')";
  
  //creating the options to pack
  let itemSelect = 0;
  const options = ["Food", "Weapons", "Clothes", "Paper", "Torch"];
  const objectList = document.createElement('div');
  objectList.id = "objectList";
  choiceDiv.appendChild(objectList);
  choiceDiv.style.flexDirection = "column";
  
  //For each loop to create the checkbox options
  options.forEach((object) => {
    const checkBox = document.createElement('input');
    checkBox.type = "checkbox";
    checkBox.id = object + "Option";
    checkBox.name = object + "Option";
    checkBox.innerHTML = object;
    const label = document.createElement("label");
    label.htmlFor = object + "Option";
    label.textContent = object;
    objectList.appendChild(checkBox);
    objectList.appendChild(label);
  });

  //Food option
  let foodChecked = false;
  const foodOption = document.getElementById("FoodOption");
  
  foodOption.addEventListener('click', (event) => {
    if (foodChecked == false) {
      itemSelect = itemSelect + 1;
      foodChecked = true;
      backpack.push("foodOption");
    }
    else if (foodChecked == true) {
      itemSelect = itemSelect - 1;
      foodChecked = false;
      const foodIndex = backpack.indexOf("foodOption");
      backpack.splice(foodIndex, 1);
    }
  });


  //Weapons option
  let weaponsChecked = false;
  const weaponsOption = document.getElementById("WeaponsOption");
  
  weaponsOption.addEventListener('click', (event) => {
    if (weaponsChecked == false) {
      itemSelect = itemSelect + 1;
      weaponsChecked = true
      backpack.push("weaponsOption");
    }
    else if (weaponsChecked == true) {
      itemSelect = itemSelect - 1;
      weaponsChecked = false;
      const weaponsIndex = backpack.indexOf("weaponsOption");
      backpack.splice(weaponsIndex, 1);
    }

  });


  //Clothes option
  let clothesChecked = false;
  const clothesOption = document.getElementById("ClothesOption");
  
  clothesOption.addEventListener('click', (event) => {
    if (clothesChecked == false) {
      itemSelect = itemSelect + 1;
      clothesChecked = true;
      backpack.push("clothesOption");
    }
    else if (clothesChecked == true) {
      itemSelect = itemSelect - 1;
      clothesChecked = false;
      const clothesIndex = backpack.indexOf("clothesOption");
      backpack.splice(clothesIndex, 1);
    }

  });

  //Paper option
  let paperChecked = false;
  const paperOption = document.getElementById("PaperOption");
  
  paperOption.addEventListener('click', (event) => {
    if (paperChecked == false) {
      itemSelect = itemSelect + 1;
      paperChecked = true;
      backpack.push("paperOption");
    }
    else if (paperChecked == true) {
      itemSelect = itemSelect - 1;
      paperChecked = false;
      const paperIndex = backpack.indexOf("paperOption");
      backpack.splice(paperIndex, 1);
    }
  });

  //Torch option
  let torchChecked = false;
  const torchOption = document.getElementById("TorchOption");

  torchOption.addEventListener('click', (event) => {
    if (torchChecked == false) {
      itemSelect = itemSelect + 1;
      torchChecked = true;
      backpack.push("torchOption");
    }
    else if (torchChecked == true) {
      itemSelect = itemSelect - 1;
      torchChecked = false;
      const torchIndex = backpack.indexOf("torchOption");
      backpack.splice(torchIndex, 1);
    }
  });
  setGlobal("backpack", backpack);
  buttons = ["Done Packing"];
  setGlobal("buttons", buttons);
  button();
}