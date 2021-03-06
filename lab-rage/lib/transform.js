'use strict';

//function to invert colors
function invertColors(bitmap) {
  for (var i = 0; i < bitmap.colorArray.length; i += 4) {
    bitmap.colorArray[i] = 255 - bitmap.colorArray[i];
  }
  return bitmap;
}

//function to greyscale colors
function monoChrome(bitmap, err) {
  if(err) throw new Error('Failed to change image to black and white');

  let currentColor = [];
  for (var i = 0; i < 1024; i += 4) {
    currentColor = bitmap.colorArray.slice(i, i + 4);
    let currentColorAverage = ((currentColor[0] + currentColor[1] + currentColor[2])/3);
    currentColor[0] = currentColorAverage;
    currentColor[1] = currentColorAverage;
    currentColor[2] = currentColorAverage;
    currentColor[3] = 0;
  }
}

// function to randomize colors
function randomColors(bitmap, err) {
  if(err) throw err;
  for (var i = 0; i < bitmap.colorArray.length; i += 4) {
    bitmap.colorArray[i] = Math.floor(Math.random() * 255);
  }
  return bitmap;
}

//export functions
module.exports.invertColors = invertColors;
module.exports.monoChrome = monoChrome;
module.exports.randomColors = randomColors;
