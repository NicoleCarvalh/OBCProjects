const boardRegions = document.querySelectorAll("#gameBoard span");

let vBoard = [];

let playerTurn = "";

function updateTitle() {
  const playerInput = document.getElementById(playerTurn);
  document.getElementById("playerTurn").innerText = playerInput.value;
}

function initializeGame() {
  vBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  playerTurn = "player1";
  document.querySelector("h2").innerHTML =
    "Vez de: <span id='playerTurn'></span>";
  updateTitle();
  boardRegions.forEach(function (element) {
    element.classList.remove("win");
    element.innerText = "";
    element.classList.add("cursor-pointer");
    element.addEventListener("click", handleBoardClick);
  });
}

function getWinRegions() {
  const winRegions = [];
  if (
    vBoard[0][0] &&
    vBoard[0][0] === vBoard[0][1] &&
    vBoard[0][0] === vBoard[0][2]
  )
    winRegions.push("0.0", "0.1", "0.2");
  if (
    vBoard[1][0] &&
    vBoard[1][0] === vBoard[1][1] &&
    vBoard[1][0] === vBoard[1][2]
  )
    winRegions.push("1.0", "1.1", "1.2");
  if (
    vBoard[2][0] &&
    vBoard[2][0] === vBoard[2][1] &&
    vBoard[2][0] === vBoard[2][2]
  )
    winRegions.push("2.0", "2.1", "2.2");
  if (
    vBoard[0][0] &&
    vBoard[0][0] === vBoard[1][0] &&
    vBoard[0][0] === vBoard[2][0]
  )
    winRegions.push("0.0", "1.0", "2.0");
  if (
    vBoard[0][1] &&
    vBoard[0][1] === vBoard[1][1] &&
    vBoard[0][1] === vBoard[2][1]
  )
    winRegions.push("0.1", "1.1", "2.1");
  if (
    vBoard[0][2] &&
    vBoard[0][2] === vBoard[1][2] &&
    vBoard[0][2] === vBoard[2][2]
  )
    winRegions.push("0.2", "1.2", "2.2");
  if (
    vBoard[0][0] &&
    vBoard[0][0] === vBoard[1][1] &&
    vBoard[0][0] === vBoard[2][2]
  )
    winRegions.push("0.0", "1.1", "2.2");
  if (
    vBoard[0][2] &&
    vBoard[0][2] === vBoard[1][1] &&
    vBoard[0][2] === vBoard[2][0]
  )
    winRegions.push("0.2", "1.1", "2.0");
  return winRegions;
}

function disableRegion(element) {
  element.classList.remove("cursor-pointer");
  element.removeEventListener("click", handleBoardClick);
}

function handleWin(regions) {
  regions.forEach(function (region) {
    document
      .querySelector('[data-region="' + region + '"]')
      .classList.add("win");
  });

  const player = document.getElementById(playerTurn).value;

  document.querySelector("h2").innerHTML = player + " venceu!";
}

function handleBoardClick(ev) {
  const region = ev.currentTarget.dataset.region; //current target é o span que "triggered" a função
  const rowColumnPair = region.split("."); //divide a string transformaando em array -> onde tiver um ponto, quebra um um array
  const row = rowColumnPair[0];
  const column = rowColumnPair[1];

  if (playerTurn === "player1") {
    ev.currentTarget.innerText = "X";
    vBoard[row][column] = "X";
  } else {
    ev.currentTarget.innerText = "O";
  }

  console.clear();
  console.table(vBoard); //pega as info e tenta passar como uma tabela. Por estarmos trabalhando com um Array Bidimensional, é possível fazer uma tabela com console.table -> aqui essa table espelha exatamente o que está em nossa tela

  disableRegion(ev.currentTarget);

  const winRegions = getWinRegions();

  if (winRegions.length > 0) {
    handleWin(winRegions);
  } else if (vBoard.flat().includes("")) {
    playerTurn = playerTurn === "player1" ? "player2" : "player1";
    updateTitle();
  } else {
    document.querySelector("h2").innerHTML = "Empate!";
  }

  // método flat -> Retorna um novo array com todos os elementos de sub-arrays concatenados nela recursivamente até a profundidade especificada.
}

document.getElementById("start").addEventListener("click", initializeGame);
