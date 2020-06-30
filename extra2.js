// Create an interactive calculator in the browser
// Using input fields and buttons create a simple calculator in the browser. The user should be able to
// type in their first number, an operator and a second number and the resulting output should be displayed
// on the page for the user to see. (You can likely reuse some the logic from your original calculator).
// EXTENSION:
// Rather than use input fields and a button. Edit your styles and JS so your calculator looks like a real calculator

// const numberOne = document.querySelector('input');
// const numberTwo = document.querySelectorAll('input')[1];
// const mathOperator = document.querySelectorAll('input')[2];
// const ul = document.querySelector('ul');
// const submit = document.querySelector('button');
// const section = document.querySelector("section");
// console.log(mathOperator.value);

// alert('im connected');

// -------STEP 1: Grab the Elements we need:-----------//
const allInputs = document.querySelectorAll('input');
const form = document.querySelector('form');
const inputZero = document.querySelectorAll('input')[0];
const inputOne = document.querySelectorAll('input')[1];
// const inputTwo = document.querySelectorAll('input')[2];
// const inputThree = document.querySelectorAll('input')[3];
// const inputFour = document.querySelectorAll('input')[4];
// const inputFive = document.querySelectorAll('input')[5];
// const inputSix = document.querySelectorAll('input')[6];
// const inputSeven = document.querySelectorAll('input')[7];
// const inputEight = document.querySelectorAll('input')[8];
// const inputNine = document.querySelectorAll('input')[9];
const inputPlus = document.querySelectorAll('input')[10];
// const inputMinus = document.querySelectorAll('input')[11];
// const inputMultiply = document.querySelectorAll('input')[12];
// const inputDivide = document.querySelectorAll('input')[13];
// const inputSqrt = document.querySelectorAll('input')[14];
// const inputPower = document.querySelectorAll('input')[15];

const submit = document.querySelector('#equal');
const display = document.querySelector('#display');

// console.log(allInputs);

// // // -------STEP 2: Grab the Values we need:-----------//
// const zero = allInputs[0].value;
// const one = allInputs[1].value;
// // const two = allInputs[2].value;
// // const three = allInputs[3].value;
// // const four = allInputs[4].value;
// // const five = allInputs[5].value;
// // const six = allInputs[6].value;
// // const seven = allInputs[7].value;
// // const eight = allInputs[8].value;
// // const nine = allInputs[9].value;

// const add = allInputs[10].value;
// // const subtract = allInputs[11].value;
// // const multiply = allInputs[12].value;
// // const divide = allInputs[13].value;
// // const sqrt = allInputs[14].value;
// // const power = allInputs[15].value;

// // console.log(zero);
// // console.log(one);
// // console.log(power);

// --------------STEP 4: Create the EventHandler:------------//
const calculation = event => {
  event.preventDefault();
  console.log(event.target.value);

  // createArray();
  // createElement();
};
let result = [];

const number = event => {
  event.preventDefault;
  return (result += event.target.value);
};
console.log(result);

// ----------STEP 3: Set the EventListener:----------//
// submit.addEventListener('click', calculation);
console.log(form.addEventListener('click', number));
// inputOne.addEventListener('click', number);
// inputTwo.addEventListener('click', number);
// inputPlus.addEventListener('click', number);
