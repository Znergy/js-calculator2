
function add(num1, num2) {
  return num1 + num2;
}

var number1;
var number2;

document.getElementById("btnMath").onclick=function() {
  number1 = parseInt(prompt("Type a number"));
  number2 = parseInt(prompt("Type another number"));
  document.getElementById("firstNum").innerHTML = document.getElementById("firstNum").innerHTML + number1;
  document.getElementById("secondNum").innerHTML = document.getElementById("secondNum").innerHTML + number2;
}

document.getElementById("btnAdd").onclick=function() {
  document.getElementById("addText").innerHTML = document.getElementById("addText").innerHTML + (add(number1, number2));
}

function minus(num1, num2) {
  return num1 - num2;
}

document.getElementById("btnMinus").onclick=function() {
  document.getElementById("minusText").innerHTML = document.getElementById("minusText").innerHTML + (minus(number1, number2));
}

function divide(num1, num2) {
  return num1 / num2;
}

document.getElementById("btnDivide").onclick=function() {
  document.getElementById("divideText").innerHTML = document.getElementById("divideText").innerHTML + (divide(number1, number2));
}

function multiply(num1, num2) {
  return num1 * num2;
}

document.getElementById("btnMultiply").onclick=function() {
  document.getElementById("multiplyText").innerHTML = document.getElementById("multiplyText").innerHTML + (multiply(number1, number2));
}

function modo(num1, num2) {
  return num1 % num2;
}

document.getElementById("btnModo").onclick=function() {
  document.getElementById("modoText").innerHTML = document.getElementById("modoText").innerHTML + (modo(number1, number2));
}

document.getElementById("btnClear").onclick=function() {
  document.getElementById("modoText").innerHTML = "Modo: ";
  document.getElementById("multiplyText").innerHTML = "Multiply: ";
  document.getElementById("divideText").innerHTML = "Divide: ";
  document.getElementById("minusText").innerHTML = "Minus: ";
  document.getElementById("addText").innerHTML = "Add: ";
  document.getElementById("firstNum").innerHTML = "Your first number: ";
  document.getElementById("secondNum").innerHTML = "Your second number: ";
}
