import { setGlobal } from '../globals.js';

// The names of your folders and the number of frames for each
const folders = [
  { name: "Attack1", frameCount: 4 },
  { name: "Idle1", frameCount: 4 },
  { name: "Idle2", frameCount: 4 },
  { name: "Run", frameCount: 4 }
];

export async function loadImages() {
  return new Promise((resolve, reject) => {
    // Create the main object to store the images
    let characterImages = {};

    // Array to store all image loading promises
    let imagePromises = [];

    folders.forEach(folder => {
      // Make sure each key is an array
      characterImages[folder.name] = [];

      for (let i = 0; i < folder.frameCount; i++) {
        // Create new image
        let image = new Image();

        // Create a promise for each image
        let imagePromise = new Promise((resolveImage, rejectImage) => {
          // Assign source of the image
          image.src = `../Adventurer/Individual Sprites/${folder.name}/${i}.png`;

          // Handle the image loading
          image.onload = function() {

            resolveImage();
          };

          // Handle image loading errors
          image.onerror = function() {

            rejectImage(`Error loading image ${folder.name}/${i}.png.`);
          };
        });

        // Add the promise to the array
        imagePromises.push(imagePromise);

        // Add the image to the characterImages object
        characterImages[folder.name].push(image);
      }
    });

    // Set the images to the global
    setGlobal('characterImages', characterImages);

    // Wait for all the image loading promises to resolve
    Promise.all(imagePromises)
      .then(() => resolve(characterImages))
      .catch(error => reject(error));
  });
}
