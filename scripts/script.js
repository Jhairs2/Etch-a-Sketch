// Global Variables
const grid = document.querySelector(".grid");
const eraser = document.querySelector(".eraser");
const reset = document.querySelector(".reset");
const rainbowBttn = document.getElementById("rainbow");
let bgColor = document.getElementById("bgColor");
let squareColor = document.getElementById("squareColor");

// while user holds click draw will turn on
let mouseDown = false;
grid.onmousedown = () => (mouseDown = true)
grid.onmouseup = () => (mouseDown = false)

// Functions
// Function to create grid
function makeGrid(size) {
    let gridSquare = grid.querySelectorAll("div");
    gridSquare.forEach(div => div.remove());
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size ** 2; i++) {
        gridSquare = document.createElement("div");
        gridSquare.classList.add("square");
        gridSquare.style.border = "2px solid black";
        gridSquare.addEventListener("mouseover", draw);
        gridSquare.addEventListener("touchstart", onTouch);
        eraser.addEventListener("click", erase);
        reset.addEventListener("click", resetBttn);
        grid.insertAdjacentElement("beforeend", gridSquare);
    }
}

// Function to make grid size depend on value set
function dynamicGrid() {
    let gridSize = document.getElementById("gridSize");
    let output = document.getElementById('gridInfo');
    output.textContent = gridSize.value + " x " + gridSize.value;
    makeGrid(gridSize.value);
};

// Function to change background color of grid
function changeBackgroundColor() {
    grid.style.backgroundColor = bgColor.value;
}

// Function will allow user to draw with specified color
function draw(e) {
    if (e.type === 'mouseover' && mouseDown) {
        if (rainbowBttn.checked) {
            let r = Math.floor(Math.random()*256);
            let g = Math.floor(Math.random()*256);
            let b = Math.floor(Math.random()*256);
            this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        } 
        else {
            this.style.backgroundColor = squareColor.value;
        }
    }
}


// Function to allow user on touch screen to draw: working progress
function onTouch(e) {
    e.preventDefault();
    this.style.backgroundColor = squareColor.value;
}

// Function will allow user to erase
function erase() {
    squareColor.value = "#d4d4d8";
}

// Reset grid 
function resetBttn() {
    let squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.backgroundColor = ""
    })

}

makeGrid(16);











