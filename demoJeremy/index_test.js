import img1 from './img/1.js';
import img2 from './img/2.js';
import img3 from './img/3.js';
import img4 from './img/4.js';

const lines = 106;
const element = document.querySelector('#test');
const images = [ img1, img2, img3, img4 ];
let indexImage = 0;

const drawLine = (lineToDraw, img) => {
  let elementLine = element.querySelector(`div:nth-child(${ lineToDraw + 1 })`);

  if (!elementLine) {
    elementLine = document.createElement("div");
    element.append(elementLine);
  }

  elementLine.innerHTML = "";
  
  for (let i = 0; i < img.columns; i++) {
    elementLine.innerHTML += img.content[(lineToDraw * img.columns) + i];
  }
}

const swap = () => {
  console.log(indexImage + ' > ' + (images.length - 1));
  if (indexImage > images.length - 1) {
    indexImage = 0;
  }

  for (let i = 0; i < lines; i++) {
    const currentIndexImage = indexImage;

    setTimeout(() => {
      drawLine(i, images[currentIndexImage]);
    }, (30 * i));
  }

  indexImage++;
}

swap();
setInterval(swap, 5000);
