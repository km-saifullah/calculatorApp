// input fields and buttons
let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let addBtn = document.querySelector(".addBtn");
let subBtn = document.querySelector(".subBtn");
let proBtn = document.querySelector(".proBtn");
let divBtn = document.querySelector(".divBtn");
let output = document.querySelector(".output");

output.style.display = "none";

// operations
let addition = (number1, number2) => {
  return number1 + number2;
};
let subtruction = (number1, number2) => {
  return number1 - number2;
};
let product = (number1, number2) => {
  return number1 * number2;
};
let division = (number1, number2) => {
  return number1 / number2;
};

// clear input fields
let clearInputFields = () => {
  input1.value = "";
  input2.value = "";
};

// show output
let showOutput = (result) => {
  output.style.display = "block";
  output.innerHTML = `Result: ${result}`;
};

// Add two numbers
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let result = operation(addition);
  showOutput(result);
});

// Subtruct two numbers
subBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let result = operation(subtruction);
  showOutput(result);
});

// Multiplication two numbers
proBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let result = operation(product);
  showOutput(result);
});

// Division two numbers
divBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let result = operation(division);
  showOutput(result);
});

// do the opration
let operation = (operationType) => {
  let number1 = Number(input1.value);
  let number2 = Number(input2.value);
  let calculation = operationType(number1, number2);
  clearInputFields();
  return calculation.toFixed(4);
};
