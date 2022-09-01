// Create the grid
const grid = document.querySelector(".grid");
grid.style.gridTemplateColumns = "repeat(16, 1fr)";
grid.style.gridTemplateRows = "repeat(16, 1fr)";

for(let i = 0; i < 256; i++) {
    let gridSquare = document.createElement("div");
    gridSquare.style.backgroundColor = "red";
    grid.insertAdjacentElement("beforeend", gridSquare);
}

// Add dynamic sizing to grid
// allow user to click squares in grid and change colors
// Also allow user to reset and eraser grid squares


