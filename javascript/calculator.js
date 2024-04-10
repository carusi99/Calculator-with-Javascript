/* <div class="calculator">
    <div class="display">0</div>
    <button class="divition">÷</button>
    <button class="btn">1</button>
    <button class="btn">2</button>
    <button class="btn">3</button>
    <button class="btn" id="delete">Delete</button>
    <button class="multiplicaton">x</button>
    <button class="btn">4</button>
    <button class="btn">5</button>
    <button class="btn">6</button> 
    <button class="btn" id="reset">c</button>
    <button class="subtracting">-</button>
    <button class="btn">7</button>
    <button class="btn">8</button>
    <button class="btn">9</button>
    <button class="btn" id="equal">=</button>
    <button class="addition">+</button>
    <button class="btn" id="cero">0</button>
    <button class="btn">.</button>
</div> */

const displayCalculator = document.querySelector(".display");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn0 = document.getElementById("btn0");
const btnSum = document.getElementById("add");
const btnRest = document.getElementById("subs");
const btnMult = document.getElementById("mult");
const btnDiv = document.getElementById("divition");
const btnEqual = document.getElementById("equal");
const btnDot = document.getElementById("dot");
const btnClear = document.getElementById("reset");
const btnErase = document.getElementById("erase");

let numeroPrevio = "";
let operador = "";
let numeroActual = "0";

let memoria = "mem";

function display() {
  displayCalculator.innerText =
    numeroPrevio + " " + operador + " " + numeroActual;
}

display();

function handleButton(num) {
  if (!(memoria === numeroActual) && numeroActual.length < 12) {
    numeroActual === "0" ? (numeroActual = num) : (numeroActual += num);
    display();
  }
}

// manejadores de los eventos click de los botones numericos
btn1.addEventListener("click", (e) => handleButton("1"));
btn2.addEventListener("click", (e) => handleButton("2"));
btn3.addEventListener("click", (e) => handleButton("3"));
btn4.addEventListener("click", (e) => handleButton("4"));
btn5.addEventListener("click", (e) => handleButton("5"));
btn6.addEventListener("click", (e) => handleButton("6"));
btn7.addEventListener("click", (e) => handleButton("7"));
btn8.addEventListener("click", (e) => handleButton("8"));
btn9.addEventListener("click", (e) => handleButton("9"));
btn0.addEventListener("click", (e) => handleButton("0"));

// botones operacionales.
btnSum.addEventListener("click", (e) => {
  if (numeroActual === "Error Math") return;
  if (operador === "") {
    numeroPrevio = numeroActual;
    numeroActual = "";
  }
  operador = "+";
  display();
});

btnRest.addEventListener("click", (e) => {
  if (numeroActual === "Error Math") return;
  if (operador === "") {
    numeroPrevio = numeroActual;
    numeroActual = "";
  }
  operador = "-";
  display();
});

btnMult.addEventListener("click", (e) => {
  if (numeroActual === "Error Math") return;
  if (operador === "") {
    numeroPrevio = numeroActual;
    numeroActual = "";
  }
  operador = "x";
  display();
});

btnDiv.addEventListener("click", (e) => {
  if (numeroActual === "Error Math") return;
  if (operador === "") {
    numeroPrevio = numeroActual;
    numeroActual = "";
  }
  operador = "÷";
  display();
});

btnDot.addEventListener("click", (e) => {
  if (numeroActual === "Error Math") return;
  if (!numeroActual.includes(".")) {
    numeroActual += ".";
    display();
  }
});

// logica de button de reset.
btnClear.addEventListener("click", (e) => {
  console.log(btnClear);
  numeroPrevio = "";
  operador = "";
  numeroActual = "0";
  memoria = " ";
  display();
});

btnErase.addEventListener("click", (e) => {
  if (numeroActual === "Error Math") return;
  if (memoria === numeroActual) return;

  numeroActual = numeroActual.slice(0, numeroActual.length - 1);
  if (numeroActual === "") {
    numeroActual = "0";
  }

  display();
});

btnEqual.addEventListener("click", (e) => {
  if (numeroPrevio === "" || numeroActual === "" || operador === "") return;
  operador === "x" ? (operador = "*") : null;
  operador === "÷" ? (operador = "/") : null;
  numeroActual = eval(numeroPrevio + operador + numeroActual);
  if (numeroActual.toString() === "Infinity" || isNaN(numeroActual)) {
    numeroActual = "Error Math";
  }
  if (Number.isInteger(numeroActual)) {
    numeroActual = numeroActual.toString();
  } else {
    numeroActual =
      numeroActual.toString().split(".")[1].length > 10
        ? numeroActual.toFixed(10).toString()
        : numeroActual.toString();
  }

  memoria = numeroActual;
  numeroPrevio = "";
  operador = "";
  display();
});
