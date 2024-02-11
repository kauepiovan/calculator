// show the digiteds characters
let number1, number;
let operation

function show(character) {
  document.getElementById('output').value += character;
}


// set the operations
function setOperation(input) {
  if (document.getElementById('output').value.length > 0) {
    number1 = setNumberOne();
    clearOutput();
  }

  switch (input) {
    case 'sum':
      operation = 'sum'
      break;

    case 'subtraction':
      operation = 'subtraction'
      break;

    case 'multiplication':
      operation = 'multiplication'
      break;

    case 'division':
      operation = 'division'
      break;

    default:
      break;
  }
}

// execute the operation
function equals() {
  let result;

  if (document.getElementById('output').value.length > 0) {
    number2 = setNumberOne();
  }
  else{
    number2 = 0;
  }

  if(number1 == undefined || number == ''){
    number1 = 0;
  }

  switch (operation) {
    case 'sum':
      result = parseInt(number1) + parseInt(number2);
      break;

    case 'subtraction':
      result = parseInt(number1) - parseInt(number2);
      break;

    case 'multiplication':
      result = parseInt(number1) * parseInt(number2);
      break;

    case 'division':
      result = parseInt(number1) / parseInt(number2);
      break;

    case undefined:
    case '':
      result = 0;
      break;

      default:
        document.getElementById('output').value = 'error'
      break;
  }

  document.getElementById('output').value = result;
}

// show the results

// clear output
function deleteAllOutput() {
  document.getElementById('output').value = '';
  number1 = '';
  number2 = '';
  operation = '';
}

function clearOutput() {
  document.getElementById('output').value = '';
}

// get the number
function setNumberOne() {
  let number;

  if (document.getElementById('output').value.length > 0) {
    number = getOutput();
  }
  console.log(number)
  return number;
}


function getOutput() {
  let number = '';
  let output = document.getElementById('output').value;

  for (character of output) {
    if (!isNaN(character)) {
      number += character;
    }
  }
  return number;
}