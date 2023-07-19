// Define an object to hold the global variables
const globals = {
    //starting up variables
    canvas: [],
    ctx: [],
    choiceDiv: [],
    storyDiv: [],
    buttons: [],
    packingOptions: [],
    backpack: [],
    music: [],
    sound: [],
    hits: 0,
    characterImages: [],
    animationId: [],
    charsource: "Idle1",
    running: false,
};

// Define a function to set a global variable
export function setGlobal(name, value) {
    //console.log(`Setting global variable '${name}' to '${value}'`);
    globals[name] = value;
}

// Define a function to get a global variable
export function getGlobal(name) {
    //console.log(`Getting global variable '${name}': '${globals[name]}'`);
    return globals[name];
}
