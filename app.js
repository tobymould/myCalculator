// const all = document.querySelectorAll('input');
// const inputZero = document.querySelectorAll('input')[0];
const Inputs = document.querySelector('form');
const submit = document.querySelector('#equal');

// console.log(allInputs);

// console.log(inputZero.value);
// console.log(inputZero.type);

// ----------STEP 1: GATHER THE INPUT---------- //
let result = '';

const inputGather = event => {
  event.preventDefault;
  console.log(`The input Array currently is ${result}`);
  console.log(`The value just clicked is ${event.target.value}`);
  return (result += event.target.value);
};

// ----------STEP 2: SEPARATE INTO SEPERATE NUMBERS AND OPERATOR ---------- //
let operator;
// let splitPosition;
const seperateInput = () => {
  if (result.includes('+')) {
    operator = '+';
    // splitPosition = result.indexOf('+');
    return result.split('+');
  }
};
console.log(`This is the input split apart inside an array: ${result}`);
console.log(operator);

// -------Step 3: Calculate the result by adding Array element [0] to [1]-------//
const final = (result, operator) => {
  return (finalValue = `${result[0]} ${operator} ${result[1]} equals ${result[0] + result[1]}`);
};

//-----------STEP 5: (FUNCTION 1) CREATE ELEMENT & ADD TO HTML----------//
// const createElement = () => {
//   const p = document.createElement('p');
//   p.innerHTML = calculation();
//   display.append(p);
// };

// ----------STEP 4: Calculate the Result & present on page---------- //
let finalValue;
const calculation = event => {
  event.preventDefault();
  const resultArray = seperateInput();
  console.log(final(resultArray, operator));
  // result = '';
  // createElement();
};

console.log(final);

Inputs.addEventListener('click', inputGather);
submit.addEventListener('click', calculation);

// const createElement = () => {
//   const p = document.createElement('p');
//   p.innerHTML = calculation();
//   display.append(p);
// };

// else if (result.contains('-')) {
//   // splitPosition = result.indexOf('-');
//   operator = '-';
//   return result.split('-');}
