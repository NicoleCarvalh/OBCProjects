const main = document.querySelector("main");
const root = document.querySelector(":root");
const input = document.querySelector("input");
const resultInput = document.getElementById("result");

const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];

document.querySelectorAll(".charKey").forEach(function (charkeyBtn) {
  charkeyBtn.addEventListener("click", function () {
    const value = charkeyBtn.dataset.value;
    input.value += value;
  });
});

document.getElementById("clear").addEventListener("click", function () {
  input.value = "";
  input.focus(); // cursor piscanusg
});

input.addEventListener("keypress", function (ev) {
  ev.preventDefault();

  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;

    return;
  }

  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }

  if (ev.key === "Enter") {
    calculate();
  }
});

document.getElementById("equal").addEventListener("click", calculate);

function calculate() {
  console.log("Sim");
  const result = eval(input.value); //avaliar código js e executar -> processo de evaluation
  resultInput.value = result;
}
