//----------------------------------------------//
//------------CREATE THE FUNCTIONS--------------//
//----------------------------------------------//

// (FUNCTION 3): MULTI-NUMBERED VALUES CONCAT.
const createArray = () => {
  let submittedArray = [];
  const submittedArray = +event.value;

  // if (event.value != add || event.value != subtract || event.value != multiply || event.value != divide || event.value != sqrt || event.value != power) {
  //   numberOne.join(',');
  // }
  return numberOne;
};

// -------------STEP 6: (FUNCTION 2) CONTAINS THE MATH LOGIC-------------//
const mathLogic = () => {
  // let result;
  if (sqrt == 'sqrt') {
    console.log('sqrt');
    return `The square root of ${numberOne.value} is ${Math.sqrt(numberOne.value)}`;
  } else {
    switch (mathOperator.value) {
      case '+':
        return `${numberOne.value} + ${numberTwo.value} = ${parseInt(numberOne.value + numberTwo.value)}`;
      case '-':
        return `${numberOne.value} - ${numberTwo.value} = ${numberOne.value - numberTwo.value}`;
      case '*':
        return `${numberOne.value} * ${numberTwo.value} = ${numberOne.value * numberTwo.value}`;
      case '/':
        return `${numberOne.value} / ${numberTwo.value} = ${numberOne.value / numberTwo.value}`;
      case '**':
        return `${numberOne.value} to the power of ${numberTwo.value} is ${numberOne.value ** numberTwo.value}`;
      default:
        return `YOU WRONG! START AGAIN`;
    }
  }
  return;
};

//-----------STEP 5: (FUNCTION 1) CREATE ELEMENT & ADD TO HTML----------//
const createElement = () => {
  const p = document.createElement('p');
  p.innerHTML = mathLogic();
  display.append(p);
};
