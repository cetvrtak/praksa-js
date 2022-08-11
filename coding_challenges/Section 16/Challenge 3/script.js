"use strict";
// Lecture stuff
function wait(seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
}

// PART 1
// 1. Write an async function 'loadNPause' that recreates Challenge #2, this time
// using async/await (only the part where the promise is consumed, reuse the
// 'createImage' function from before)
// 2. Compare the two versions, think about the big differences, and see which one
// you like more
// 3. Don't forget to test the error handler, and to set the network speed to “Fast 3G”
// in the dev tools Network tab
const imgContainer = document.querySelector(".images");

function createImage(imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
}
async function loadNPause() {
  try {
    let currentImage = await createImage("/img/img-1.jpg");
    console.log("Image 1 loaded");
    await wait(2);
    // .then((img) => {
    //   console.log("Image 1 loaded");
    //   currentImage = img;
    //   return wait(2);
    // })
    currentImage.style.display = "none";
    currentImage = await createImage("/img/img-2.jpg");
    // .then(() => {
    //   currentImage.style.display = "none";
    //   return createImage("/img/img-2.jpg");
    // })
    console.log("Image 2 loaded");
    await wait(2);
    // .then((img) => {
    //   console.log("Image 2 loaded");
    //   currentImage = img;
    //   return wait(2);
    // })
    currentImage.style.display = "none";
    // .then(() => {
    //   currentImage.style.display = "none";
    // })
  } catch {
    console.error("Problem with Image 1 🍳");
  }
  // .catch((err) => console.error("Problem with Image 1 🍳"));
}
// loadNPause();

// PART 2
// 1. Create an async function 'loadAll' that receives an array of image paths
// 'imgArr'
// 2. Use .map to loop over the array, to load all the images with the
// 'createImage' function (call the resulting array 'imgs')
// 3. Check out the 'imgs' array in the console! Is it like you expected?
// 4. Use a promise combinator function to actually get the images from the array �
// 5. Add the 'parallel' class to all the images (it has some CSS styles)

// Test data Part 2: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img3.jpg']. To test, turn off the 'loadNPause' function

async function loadAll(imgArr) {
  try {
    // const imgs = imgArr.map(img => {await createImage(img)}); -> doesn't work because await is only allowed in async functions
    const imgs = imgArr.map(async (img) => await createImage(img));

    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach((img) => img.classList.add("parallel"));
  } catch (err) {
    console.error(err);
  }
}
loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);
