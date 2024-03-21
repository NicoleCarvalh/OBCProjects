let balance = prompt("Informe a quantidade de dinheiro inicial");

balance = parseFloat(balance);

let option = "";

do {
  option = prompt(
    "Saldo disponível: R$ " +
      balance +
      "\n1. Add dinheiro" +
      "\n2. Remover dinheiro" +
      "\n3. Sair"
  );

  switch (option) {
    case "1":
      balance += parseFloat(prompt("Informe o valor a ser adicionado:"));
      break;
    case "2":
      balance -= parseFloat(prompt("Informe o valor a ser removido:"));
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Entrada inválida");
  }
} while (option !== "3");
