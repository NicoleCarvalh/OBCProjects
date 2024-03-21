const car1 = prompt("Informe o nome do primeiro veículo:");
const velocity1 = parseFloat(
  prompt("Informe a velocidade do primeiro veículo")
);

//prompts são, por natureza, strings. Então usamos parseFloat para transformar em número

const car2 = prompt("Informe o nome do segundo veículo:");
const velocity2 = parseFloat(prompt("Informe a velocidade do segundo veículo"));

if (velocity1 > velocity2) {
  alert(car1 + "é mais rápido que " + car2);
} else if (velocity2 > velocity1) {
  alert(car2 + "é mais rápido que " + car1);
} else {
  alert("Ambos possuem velocidades iguais");
}
