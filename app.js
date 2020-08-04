const inputs = document.querySelector('form');
const submit = document.querySelector('.submit');
const valueInDisplay = document.querySelector('#display h2');
console.log(valueInDisplay);

// instantiate your variables:
let result = '';
let runningTotal = 0;

const resetInput = () => {
  runningTotal = 0;
  valueInDisplay.innerText = runningTotal;
};

// ----------STEP 1: GATHER THE INPUT---------- //
const inputGather = event => {
  event.preventDefault();
  const input = event.target.value;
  console.log(`The input Array currently is ${result}`);
  console.log(`The value just clicked is ${event.target.value}`);
  return (result += input);
};

// ----------STEP 2: SEPARATE INTO SEPERATE NUMBERS AND OPERATOR ---------- //
let operator;
// let splitPosition;
const seperateInput = () => {
  if (result.includes('+')) {
    operator = '+';
    return result.split('+');
  }
  // } else if (result.includes('-')) {
  //   operator = '-';
  //   return result.split('-');
  // } else if (result.includes('*')) {
  //   operator = '*';
  //   return result.split('*');
  // } else if (result.includes('/')) {
  //   operator = '/';
  //   return result.split('/');
  // }
};
console.log(`This is the input split apart inside an array: ${result}`);
console.log(operator);

// -------Step 3: Calculate the result by adding Array element [0] to [1]-------//
const final = (result, operator) => {
  const finalValue = result[0] + result[1];
  runningTotal += finalValue;
  valueInDisplay.innerText = runningTotal;
  // return (finalValue = `${result[0]} ${operator} ${result[1]} equals ${result[0] + result[1]}`);
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

inputs.addEventListener('click', inputGather);
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
