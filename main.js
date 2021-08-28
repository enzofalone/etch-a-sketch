let container = document.getElementById("main");
let cells = [];

//optional feature variables
let randomColor = false;
let randomColorButton = document.querySelector("#random-color-button");

createGrid();

function createGrid(cellSize) {
    let x;
    if(cellSize == null) {
        x = 16;
    } else {
        x = cellSize;
    }
    document.querySelector("#grid-size-text").innerHTML = x + "x" + x;
    for (let i = 0; i < x; i++) {
        let col = document.createElement("div");

        for (let j = 0; j < x; j++) {

            let cell = document.createElement("div");

            //style cell
            cell.style.width = (640 / x) + "px";
            cell.style.height = (640 / x) + "px";
            cell.style.backgroundColor = "#f7f1e3";
            cell.style.margin = "0";
            //cell.style.boxSizing = "border-box";
            //cell.style.border = "1px solid black";

            //hover effect
            cell.addEventListener("mouseover", function () {

                if (!cell.classList.contains("hovered")) {
                    if(randomColor){
                        this.style.backgroundColor = getRandomColor();
                    } else {
                        this.style.backgroundColor = "#9980FA"
                    }
                    cell.classList.add("hovered");
                }
            });

            //add to column
            col.appendChild(cell);
            //add class to keep track
            cell.classList.add("cell");
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
    }
    let newSize = 100;
    while(newSize > 64) {
        newSize = prompt("Input a grid size no larger than 64");
    }
    createGrid(newSize);
}

//optional feature
function switchRandom() {
    if(!randomColor) {
        randomColor = true;
        //randomColorButton.style.border = "3px solid linear-gradient(to right, orange, yellow, green, cyan, blue, violet)"; pending implementation
        console.log("Random colors = true");
    } else {
        randomColor = false;
        //randomColorButton.style.border = "3px solid #fffffa"; pending implementation
        console.log("Random colors = false");
    }
}

function getRandomColor() {
    return "rgb(" + (Math.random() * 255) + "," + (Math.random() * 255) + "," + (Math.random() * 255) + ")";
}