const attacker = prompt("Qual é o nome do personagem attacker?");
const attackPower = parseFloat(prompt("Qual é o seu poder de ataque?"));

const defender = prompt("Qual é o nome do personagem defender?");
let lifePoints = parseFloat(prompt("Quantos pontos de vida ele possui?"));
const defenderPower = parseFloat(prompt("Qual é seu poder de defesa?"));
const hasShield = prompt("Ele possui um escudo? (Sim/Não)");

let causedDamage = 0;

if (attackPower > defenderPower && hasShield === "Não") {
  causedDamage = attackPower - defenderPower;
} else if (attackPower > defenderPower && hasShield === "Sim") {
  causedDamage = (attackPower - defenderPower) / 2;
}

lifePoints -= causedDamage;

alert(attacker + " causou " + causedDamage + " pontos de dano em " + defender);
alert(
  attacker +
    "\nPoder de ataque: " +
    attackPower +
    "\n\n" +
    defender +
    "\nPontos de vida: " +
    lifePoints +
    "\nPoder de defesa: " +
    defenderPower +
    "\nPossui escudo: " +
    hasShield
);
