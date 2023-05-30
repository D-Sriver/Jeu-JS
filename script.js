//création du tableau
const table = document.createElement("table");
let Col = 10;
let Lig = 10;
//création du tableau
for (let i = 0; i < Col; i++) {
  const ligne = document.createElement("tr");
  for (let j = 0; j < Lig; j++) {
    const colone = document.createElement("td");
    ligne.appendChild(colone);
  }
  table.appendChild(ligne);
}

document.body.appendChild(table);

//création du player
const cell = document.querySelector("table tr:first-child td:first-child");
cell.classList.add("player");
// déplacement par touche
document.body.appendChild(table);
document.addEventListener("keydown", function (event) {
  const currentCell = document.querySelector(".player");
  const currentRow = currentCell.parentNode;
  const currentRowIndex = currentRow.rowIndex;
  const currentCellIndex = currentCell.cellIndex;

  if (event.key === "ArrowLeft" && currentCellIndex > 0) {
    // touche gauche
    const nextCell = currentRow.cells[currentCellIndex - 1];
    currentCell.classList.remove("player");
    nextCell.classList.add("player");
  } else if (event.key === "ArrowUp" && currentRowIndex > 0) {
    // touche haut
    const nextRow = currentRow.previousElementSibling;
    const nextCell = nextRow.cells[currentCellIndex];
    currentCell.classList.remove("player");
    nextCell.classList.add("player");
  } else if (event.key === "ArrowRight" && currentCellIndex < 9) {
    // touche droite
    const nextCell = currentRow.cells[currentCellIndex + 1];
    currentCell.classList.remove("player");
    nextCell.classList.add("player");
  } else if (event.key === "ArrowDown" && currentRowIndex < 9) {
    // touche bas
    const nextRow = currentRow.nextElementSibling;
    const nextCell = nextRow.cells[currentCellIndex];
    currentCell.classList.remove("player");
    nextCell.classList.add("player");
  }
});
