const inputs = document.querySelector('form');
const submit = document.querySelector('.submit');
const valueInDisplay = document.querySelector('#display h2');

// instantiate  variables:
// let result = '';
let array = [];
let string = '';
// let operator;
// let value2;
let runningTotal = 0;
const operators = ['+', '-', '*', ' /'];

// const resetInput = () => {
//   runningTotal = 0;
//   valueInDisplay.innerText = runningTotal;
// };

// ----------STEP 1: GATHER THE INPUT---------- //
const inputGather = event => {
  event.preventDefault();
  const input = event.target.value;
  // console.log(input);
  // if ((typeof input == 'number' && isFinite(input)) || operators.includes(input)) {
  //   return;
  // }
  if (!input) {
    return;
  } else if (input === '=') {
    turnArrayIntoMath();
  } else {
    array.push(input);
    // console.log(array);
  }

  // if (value1 && operator) {
  // if (typeof input === 'number' && isFinite(input)) {
  //   return (value1 = input);
  // } else if (input.includes('+')) {
  //   return (operator = '+');
  // } else if (input.includes('-')) {
  //   return (operator = '-');
  // } else if (input.includes('*')) {
  //   return (operator = '*');
  // } else if (input.includes('/')) {
  //   return (operator = '/');
  // }
  // // }

  // console.log(value1);
  // console.log(operator);
  // console.log(runningTotal);

  // calculation(value1, operator);
  // console.log(`The input Array currently is ${result}`);
  // console.log(`The value just clicked is ${event.target.value}`);
  // return (result += input);
};

// ----------STEP 2: SEPARATE INTO SEPERATE NUMBERS AND OPERATOR ---------- //
const turnArrayIntoMath = () => {
  let operatorIndex = [];
  let numberArray = [];
  let initialIndex = 0;

  array.forEach((element, index) => {
    if (operators.includes(element)) {
      operatorIndex.push({ element: element, indexPoint: index });
    }
  });

  console.log('operatorIndex: ', operatorIndex);
  // console.log(operatorIndex[0].element);
  console.log(operatorIndex[0].indexPoint);

  const lengthOfInput = array.length;
  console.log('lengthOfInput', lengthOfInput);
  const lengthOfOperatorArray = operatorIndex.length;

  console.log('Array before: ', array);

  operatorIndex.map((object, index) => {
    console.log(`Round ${index}`, 'initialIndex:', initialIndex, 'object.index:', object.indexPoint);
    console.log('INDEX', index, 'operatorIndex.length', operatorIndex.length);
    if (index === operatorIndex.length - 1) {
      let result = array.slice(initialIndex, object.indexPoint);
      console.log('result', result);
      let resultAsString = parseFloat(result.join(''));
      numberArray.push(resultAsString);
      initialIndex = object.indexPoint + 1;
      //
      result = array.slice(initialIndex, array.length);
      console.log('result', result);
      resultAsString = parseFloat(result.join(''));
      numberArray.push(resultAsString);
      initialIndex = object.indexPoint + 1;
    } else {
      let result = array.slice(initialIndex, object.indexPoint);
      console.log('result', result);
      let resultAsString = parseFloat(result.join(''));
      numberArray.push(resultAsString);
      initialIndex = object.indexPoint + 1;
    }

    // if (index === 0) {
    //   let result = array.slice(0, object.indexPoint);
    //   console.log('result', result);
    //   numberArray.push(result);
    //   initialIndex = object.indexPoint + 1;

    //   const secondnumber = operatorIndex[1].indexPoint;

    // console.log(`Round ${index} - part 2: `, 'initialIndex:', initialIndex, 'operatorIndex[1].index:', secondnumber);
    // console.log('secondnumber', secondnumber);
    // result = array.slice(initialIndex, secondnumber);
    // console.log('result', result);
    // numberArray.push(result);
    // } else if (index === 1) {
    //   return;
    // }
    // else {
    // let result = array.slice(initialIndex, object.indexPoint);
    // console.log('result', result);
    // numberArray.push(result);
    // initialIndex = object.indexPoint;
    // console.log(initialIndex + 1);
    // }
  });

  console.log('numbers array', numberArray);
  // if (typeof element === 'number' && isFinite(input)) {
  //   parseFloat(element);
  // }

  // if (!array.includes('+')) {
  //   console.log(array);
  //   array.join('+');
  // }

  // if (string.includes('-')) {
  //   string.split('-');
  // }
  // if (string.includes('*')) {
  //   string.split('*');
  // }
  // if (string.includes('/')) {
  //   string.split('/');
  // }
  console.log('operatorIndex', operatorIndex);
  // console.log('string of Array: ', array);
};
// console.log(value1);
// console.log(operator);

// -------Step 3: Calculate the result by adding Array element [0] to [1]-------//
// const calculation = string => {
//   if (value1 && operator) {
//     if (operator === '+') {
//       return runningTotal + value1;
//     } else if (operator === '-') {
//       return runningTotal - value1;
//     } else if (operator === '*') {
//       return runningTotal * value1;
//     } else if (operator === '/') {
//       return runningTotal / value1;
//     }

//     valueInDisplay.innerText = runningTotal;
//     // value1 = null;
//     // operator = null;
//   }
// };

//-----------STEP 5: (FUNCTION 1) CREATE ELEMENT & ADD TO HTML----------//

// ----------STEP 4: Calculate the Result & present on page---------- //

// console.log(final);

inputs.addEventListener('click', inputGather);
// submit.addEventListener('click', );
