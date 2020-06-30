// Create an interactive calculator in the browser
// Using input fields and buttons create a simple calculator in the browser. The user should be able to
// type in their first number, an operator and a second number and the resulting output should be displayed
// on the page for the user to see. (You can likely reuse some the logic from your original calculator).
// EXTENSION:
// Rather than use input fields and a button. Edit your styles and JS so your calculator looks like a real calculator

// -------STEP 1: Grab the Elements we need:-----------//
const numberOne = document.querySelector('input');
const numberTwo = document.querySelectorAll('input')[1];
const mathOperator = document.querySelectorAll('input')[2];
const ul = document.querySelector('ul');
const submit = document.querySelector('button');
// const section = document.querySelector("section");

console.log(mathOperator.value);

// --------------STEP 3: Create the EventHandler:------------//
const calculateDis = event => {
  event.preventDefault();
  const li = document.createElement('li'); //create element but exists nowhere.
  li.innerHTML = mathLogic(numberOne.value, numberTwo.value, mathOperator); //adding text inside the newly create <li>
  ul.append(li); //actually putting into the DOM/HTML - attaches the <li> to end of <ul> in HTML file.
};

// ----------STEP 2: Set the EventListener:----------//
submit.addEventListener('click', calculateDis);

// -------------STEP 5: (FUNCTION 2) CONTAINS THE MATH LOGIC-------------//
const mathLogic = (numberOne, numberTwo, mathOperator) => {
  // let result;
  if (mathOperator == 'sqrt') {
    console.log('sqrt');
    return `The square root of ${numberOne} is ${Math.sqrt(numberOne)}`;
  } else {
    switch (mathOperator) {
      case '+':
        return `${numberOne} + ${numberTwo} = ${parseInt(numberOne + numberTwo)}`;
      case '-':
        return `${numberOne} - ${numberTwo} = ${numberOne - numberTwo}`;
      case '*':
        return `${numberOne} * ${numberTwo} = ${numberOne * numberTwo}`;
      case '/':
        return `${numberOne} / ${numberTwo} = ${numberOne / numberTwo}`;
      case '**':
        return `${numberOne} to the power of ${numberTwo} is ${numberOne ** numberTwo}`;
      default:
        return `YOU WRONG! START AGAIN`;
    }
  }
  return;
};

//-----------STEP4: (FUNCTION 1) CREATE ELEMENT & ADD TO HTML----------//

// -----------CODE TO EDIT--------------//
