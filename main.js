let container = document.getElementById("main");
let cells = [];
createGrid();

function createGrid(cellSize) {
    let x;
    if(cellSize == null) {
        x = 16;
    } else {
        x = cellSize;
    }
    for (let i = 0; i < x; i++) {
        let col = document.createElement("div");

        for (let j = 0; j < x; j++) {

            let cell = document.createElement("div");

            //style cell
            cell.style.width = (640 / x) + "px";
            cell.style.height = (640 / x) + "px";
            
            cell.style.margin = "0";
            cell.style.boxSizing = "border-box";
            cell.style.border = "1px solid black";

            //hover effect
            cell.addEventListener("mouseover", function () {

                if (!cell.classList.contains("hovered")) {
                    this.style.backgroundColor = getRandomColor();
                    cell.classList.add("hovered");
                }
            });

            //add to column
            col.appendChild(cell);
            //add class to keep track
            cell.classList.add("cell");
            //add to cells array to track all elements
            cells.push(cell);
        }
        container.appendChild(col);
    }
    console.log("total cells = " + cells.length);
}

function resetGrid() {
    //clean the grid array
    let totalCells = document.querySelectorAll(".cell");
    for (let i = 0; i < totalCells.length; i++) {
        totalCells[i].remove();
        cells.splice(i, 1);
    }
    let newSize = prompt("Input the grid size");
    createGrid(newSize);
}

//optional feature
function getRandomColor() {
    return "rgb(" + (Math.random() * 255) + "," + (Math.random() * 255) + "," + (Math.random() * 255) + ")";
}