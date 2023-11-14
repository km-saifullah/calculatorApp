// input fields and buttons
let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let addBtn = document.querySelector(".addBtn");
let subBtn = document.querySelector(".subBtn");
let proBtn = document.querySelector(".proBtn");
let divBtn = document.querySelector(".divBtn");

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

// Add two numbers
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  operation(addition);
});

// Subtruct two numbers
subBtn.addEventListener("click", (e) => {
  e.preventDefault();
  operation(subtruction);
});

// Multiplication two numbers
proBtn.addEventListener("click", (e) => {
  e.preventDefault();
  operation(product);
});

// Division two numbers
divBtn.addEventListener("click", (e) => {
  e.preventDefault();
  operation(division);
});

// do the opration
let operation = (operationType) => {
  let number1 = Number(input1.value);
  let number2 = Number(input2.value);
  let sum = operationType(number1, number2);
  console.log(sum);
  clearInputFields();
};
