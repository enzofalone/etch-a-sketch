let container = document.getElementById("main");
container.style.maxWidth = "1024px";

for (let i = 0; i < 64; i++) {

    let col = document.createElement("div");
    //col.style.flex = "1 0 0%";
    //col.style.margin = "0";
    //col.style.alignContent = "flex-start";
    //col.style.flexWrap = "wrap";
    for (let j = 0; j < 48; j++) {
        let cell = document.createElement("div");
        
        cell.style.width = "16px";
        cell.style.height = "16px";
        cell.style.maxWidth = "16px";
        cell.style.maxHeight = "16px";
        //cell.style.display = "inline-block";
        cell.style.margin = "0";
        //cell.style.boxShadow = "inset 0px 0px 0px 10px #f00";
        cell.style.boxSizing = "border-box";
        cell.style.border = "1px solid black";
        cell.addEventListener("mouseover", function() {
            this.style.backgroundColor = "red";
        });
        
        
        col.appendChild(cell);
    }
    container.appendChild(col);
}

