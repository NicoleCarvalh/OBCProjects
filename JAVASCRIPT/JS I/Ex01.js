let nome = prompt("Escreva seu nome:");
let sobrenome = prompt("Escreva seu sobrenome:");
let campoDeEstudo = prompt("Escreva aqui o seu campo de estudo:");
let anoNascimento = prompt("Informe o seu ano de nascimento:");

// let nome = "Fernando";

let anoAtual = 2023;

document.write("Informações do Recruta:");
document.write("<br>");
document.write(`Nome do recruta: ${nome}`);
document.write("<br>");
document.write(`Sobrenome do recruta: ${sobrenome}`);
document.write("<br>");
document.write(`Campo de estudo: ${campoDeEstudo}`);
document.write("<br>");
document.write(`Idade do recruta: ${anoAtual - anoNascimento}`);
