let color = document.querySelector("#colorSelect");

// Create the grid
function makeGrid(size) {
    const grid = document.querySelector(".grid");
    const eraser = document.querySelector(".eraser");
    const reset = document.querySelector(".reset");
    // Create columns and rows in grid
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // Loop will create rows and columns and append them to the grid
    for (let i = 0; i < (size * size); i++) {
        let gridSquare = document.createElement("div");
        gridSquare.classList.add("square");
        gridSquare.style.backgroundColor = "white";
        // gives squares coloring function and erase function
        gridSquare.addEventListener("mouseover", draw)
        gridSquare.addEventListener("touchmove", onTouch);
        eraser.addEventListener("click", erase);
        reset.addEventListener("click", resetBttn);
        grid.insertAdjacentElement("beforeend", gridSquare);
    }
}


// Add dynamic sizing to grid
function createGrid() {
    let gridSize = document.querySelector(".slider");
    let output = document.querySelector('output');
    output.textContent = gridSize.value + " x " + gridSize.value;
    makeGrid(gridSize.value);
}



// if user clicks draw will turn off or back on
let mouseDown = false;
const grid = document.querySelector(".grid");
grid.onmousedown = () => (mouseDown = true)
grid.onmouseup = () => (mouseDown = false)

// allow user to color squares in grid and 
function draw(e) {
    if (e.type === 'mouseover' && mouseDown) { 
        
        this.style.backgroundColor = color.value;
    }
} 

grid.addEventListener("touchstart", () => {
        preventDefault()
})

function onTouch(e) {

    
        // the user touched the screen!
    this.style.backgroundColor = color.value;

}

// allow user to erase squares
function erase() {
    color.value = "#FFFFFF";
}


// Reset grid 
function resetBttn() {
    let squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.backgroundColor = "white"
    })

}

createGrid()










