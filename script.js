// show the typing characters
let number1, number2;
let operation;

function show(character) {
  // to set the max length to output
  if (
    document.getElementById("output").value.includes(".") &&
    character == "."
  ) {
    character = "";
  }
  if (document.getElementById("output").value.length <= 11) {
    if (document.getElementById("output").value == "" && character == ".") {
      document.getElementById("output").value = "0.";
    } else {
      document.getElementById("output").value += character;
    }
  }
}
// set the operations
function setOperation(input) {
  if (document.getElementById("output").value.length > 0) {
    number1 = setNumberOne();
  } else {
    number1 = 0;
  }

  clearOutput();

  switch (input) {
    case "sum":
      operation = "sum";
      document.getElementById("previous-number").value = `${number1} +`;
      break;

    case "subtraction":
      operation = "subtraction";
      document.getElementById("previous-number").value = `${number1} -`;
      break;

    case "multiplication":
      operation = "multiplication";
      document.getElementById("previous-number").value = `${number1} *`;
      break;

    case "division":
      operation = "division";
      document.getElementById("previous-number").value = `${number1} /`;
      break;

    default:
      break;
  }
}

function percent() {
  if (number1 == 0 || number1 == "") {
    document.getElementById("output").value = 0;
  } else {
    let currentNumber = document.getElementById("output").value;
    let percentNumber = (currentNumber / 100) * number1;
    document.getElementById("output").value = percentNumber;
  }
}

function oneDivided() {
  if (
    !(
      document.getElementById("output").value == undefined ||
      document.getElementById("output").value == ""
    )
  ) {
    output = document.getElementById("output").value;
  }
  else {
    output = 0;
  }
  number = 1 / parseFloat(output)
  document.getElementById("output").value = number;
}

function pow() {
  output = document.getElementById("output").value;
  document.getElementById("output").value = Math.pow(output, 2)
}

function squareRoot() {
  output = document.getElementById("output").value;
  document.getElementById("output").value = Math.sqrt(output, 2)
}

function minusPlus() {
  let output = parseFloat(document.getElementById("output").value);
  if (output > 0) {
    document.getElementById("output").value = `-${output}`;
  } else {
    document.getElementById("output").value = Math.abs(output);
  }
}

// execute the operation
function equals() {
  let result;

  if (document.getElementById("output").value.length > 0) {
    number2 = setNumberOne();
  } else {
    number2 = 0;
  }

  if (number1 == undefined || number2 == "") {
    number1 = 0;
  }

  switch (operation) {
    case "sum":
      result = parseFloat(number1) + parseFloat(number2);
      break;

    case "subtraction":
      result = parseFloat(number1) - parseFloat(number2);
      break;

    case "multiplication":
      result = parseFloat(number1) * parseFloat(number2);
      break;

    case "division":
      result = parseFloat(number1) / parseFloat(number2);
      break;

    case undefined:
    case "":
      result = 0;
      break;

    default:
      document.getElementById("output").value = "error";
      break;
  }

  document.getElementById("output").value = result;
  number1 = result;
  document.getElementById("previous-number").value += ` ${number2} =`;
}

// show the results

// clear output
function deleteAllOutput() {
  document.getElementById("output").value = "";
  document.getElementById("previous-number").value = "";
  number1 = "";
  number2 = "";
  operation = "";
}

function clearOutput() {
  document.getElementById("output").value = "";
}

function deleteCharacter() {
  let arrayNumbers = document.getElementById("output").value.split("");
  arrayNumbers.pop();
  document.getElementById("output").value = arrayNumbers.join("");
}

// get the number
function setNumberOne() {
  let number;

  if (document.getElementById("output").value.length > 0) {
    number = getOutput();
  }
  console.log(number);
  return number;
}

function getOutput() {
  let number = "";
  let output = document.getElementById("output").value;

  for (character of output) {
    if (!isNaN(character) || character == "-" || character == ".") {
      number += character;
    }
  }
  return number;
}
