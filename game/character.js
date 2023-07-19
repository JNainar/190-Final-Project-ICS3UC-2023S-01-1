import { getGlobal } from "../globals.js";

let currentFrame = 0;
let lastUpdateTime = 0;
let charsource = getGlobal("charsource")
export function character(animationState = charsource, frameRate = 10) {
    // Getting global variables
    const ctx = getGlobal("ctx");
    const characterImages = getGlobal("characterImages");

    // Get the current time
    const currentTime = Date.now();

    // Time since the last update
    const deltaTime = currentTime - lastUpdateTime;

    // If enough time has passed, update the frame
    if (deltaTime >= 3000 / frameRate) {
        currentFrame = (currentFrame + 1) % characterImages[animationState].length;
        lastUpdateTime = currentTime;
    }

    // Draw the current frame
    ctx.drawImage(characterImages[animationState][currentFrame], 10, 390, 100, 74);
}


