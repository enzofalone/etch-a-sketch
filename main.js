let container = document.getElementById("main");
container.style.maxWidth = "1024px";
let cells = [];
createGrid();

function createGrid(cellSize) {
    
    for (let i = 0; i < (cellSize / 1024); i++) {

        let col = document.createElement("div");
        //col.style.flex = "1 0 0%";
        //col.style.margin = "0";
        //col.style.alignContent = "flex-start";
        //col.style.flexWrap = "wrap";
        for (let j = 0; j < 48; j++) {
            if(container.style.width >= "1024px") {
                console.log("exceed");
                break;
            }
            if(container.style.height >= "1024px") break;
            

            let cell = document.createElement("div");

            //style cell
            if (!cellSize) {
                cell.style.width = "16px";
                cell.style.height = "16px";
                cell.style.maxWidth = "16px";
                cell.style.maxHeight = "16px";
            } else {
                cell.style.width = cellSize;
                cell.style.height = cellSize;
                cell.style.maxWidth = cellSize;
                cell.style.maxHeight = cellSize;    
            }

            cell.style.margin = "0";
            cell.style.boxSizing = "border-box";
            cell.style.border = "1px solid black";

            //hover effect
            cell.addEventListener("mouseover", function () {
                
                if (!cell.classList.contains("hovered")) {
                    this.style.backgroundColor = getRandomColor()
                    cell.classList.add("hovered");
                }
            });

            //add to column
            col.appendChild(cell);
            cells.push(cell);
        }
        container.appendChild(col);
    }
}

function getRandomColor() {
    return "rgb(" + (Math.random() * 255) + "," + (Math.random() * 255) + "," + (Math.random() * 255) + ")";
}

function resetGrid() {
    //clean the grid
    /*let drawnCells = document.querySelectorAll(".hovered");
    for (let i = 0; i < drawnCells.length; i++) {
        let drawnCell = drawnCells[i];
        drawnCell.style.backgroundColor = "white";
        drawnCell.classList.remove(".hovered");
    }*/
    for (let i = 0; i < cells.length; i++) {
        let c = cells[i];
        c.remove();
    }

    let newSize = prompt("Input the new size of the grid cells");
    createGrid(newSize + "px");
}