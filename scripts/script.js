
function makeGrid(grid, rows, cols) {
const container = document.createElement("div");
container.classList.add("container");


for(let i = 0; i < rows; i++) {
    let row = document.createElement("div");
    row.classList.add("row");

    for(let j = 0; j < cols; j++) {
        let box = document.createElement("div");
        box.classList.add("box");
        row.appendChild(box)
    };

    container.appendChild(row);
}
    grid.appendChild(container);

}

makeGrid(document.body, 8, 8);