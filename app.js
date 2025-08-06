const div1 = document.getElementById('first')
const div2 = document.getElementById('second')
const div3 = document.getElementById('third')

function makeRed(element) {
  element.style.backgroundColor = 'red'
}

function makeBlue(element) {
  element.style.backgroundColor = 'blue'
}

//create makeGreen callback function
const makeGreen = (element) => {
  element.style.backgroundColor = 'green'
}

function addStyleToElement(element, callback) {
  callback(element)
}

//when you need to add arguments to callback functions, add them separately to the called function's arguments (see above)
//follow below

addStyleToElement(div1, makeRed)
addStyleToElement(div2, makeBlue)
//add makeGreen to div3
addStyleToElement(div3, makeGreen)
