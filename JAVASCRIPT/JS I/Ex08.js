let velocity = 0;

do {
  alert("A velocidade do veículo é " + velocity + " km/h");
  velocity -= 20;
} while (velocity > 0);

alert("Velocidade final: " + velocity + "km/h");

// a condição do while era falsa desde de o princípio (velocidade começa com 0), mas bloco de código dentro do "do" é realizado ao menos uma vez, sendo a velocidade final o valor de "-20"
