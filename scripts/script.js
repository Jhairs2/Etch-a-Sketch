
// Create the grid
function makeGrid(size){
    const grid = document.querySelector(".grid");
    
    // Create columns and rows in grid
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    // Loop will create rows and columns and append them to the grid
    for(let i = 0; i < (size**2); i++) {
    let gridSquare = document.createElement("div");
    gridSquare.style.backgroundColor = "red";
    grid.insertAdjacentElement("beforeend", gridSquare);
    }
}

// Add dynamic sizing to grid
function createGrid() {
    let gridSize = document.querySelector(".slider")
    makeGrid(gridSize.value);
}

createGrid()

// allow user to click squares in grid and change colors
// Also allow user to reset and eraser grid squares













