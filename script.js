'use strict';

const createGrid = function (numSquares) {
  let htmlSquare = `<div class="square"></div>`;
  let html = '';
  for (let i = 0; i < numSquares ** 2; i++) {
    html += htmlSquare;
  }
  const gridContainerHTML = `<div class="grid-container">${html}</div>`;

  document
    .querySelector('body')
    .insertAdjacentHTML('beforeend', gridContainerHTML);

  const borderWidth = 1;
  const containerWidth = 500 + numSquares * borderWidth * 2;
  const squareWidth = containerWidth / numSquares - borderWidth * 2;

  const gridContainer = document.querySelector('.grid-container');
  const squares = document.querySelectorAll('.square');

  gridContainer.style.border = `${borderWidth}px solid black`;
  gridContainer.style.width = `${containerWidth}px`;
  gridContainer.style.height = `${containerWidth}px`;

  squares.forEach(square => {
    square.style.border = `${borderWidth}px solid black`;
    square.style.width = `${squareWidth}px`;
    square.style.height = `${squareWidth}px`;
  });

  squares.forEach(square => {
    square.addEventListener('mouseover', function () {
      square.style.backgroundColor = 'black';
    });
  });
};

createGrid(4);

const resetBtn = document.querySelector('button');
resetBtn.addEventListener('click', function () {
  const numSquares = Number(
    prompt('How many squares would you like to make up the grid?')
  );

  document.querySelector('.grid-container').remove();
  document.querySelectorAll('.square').forEach(square => square.remove());

  createGrid(numSquares);
});
