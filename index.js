/* eslint-disable no-restricted-syntax */
/* const body = document.body;
function addElement() {
  // create a new div element
  const newDiv = document.createElement('div');

  // and give it some content
  const newContent = document.createTextNode('Hi there and greetings!');

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById('div1');
  document.body.insertBefore(newDiv, currentDiv);
}
body.onload = addElement; */

const body = document.body;
const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);
function grid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  container.style.border = '3px solid #0000FF';
  for (let i = 0; i < rows * cols; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-item');
    container.append(square);
  }
}
window.onload(grid(4, 4));
