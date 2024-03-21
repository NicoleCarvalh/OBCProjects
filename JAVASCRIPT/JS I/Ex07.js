const tourist = prompt("Qual é o nome do turista?");

let cities = "";

let count = 0;

let keepOn = prompt("Você visitou alguma cidade? Sim/Não");

while (keepOn === "Sim") {
  let city = prompt("Qual é o nome da cidade visitada?");
  cities += " - " + city + "\n";
  count++;
  keepOn = prompt("Você visitou alguma outra cidade? Sim/Não");
}

alert(
  "Turista: " +
    tourist +
    "\nQuantidade de cidades visitadas: " +
    count +
    "\nCidades visitadas:\n" +
    cities
);
