let click = false;
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
    for (let i = 0; i < (size ** 2); i++) {
        let gridSquare = document.createElement("div");
        gridSquare.classList.add("square");
        gridSquare.style.backgroundColor = "white";
        // gives squares coloring function and erase function
        gridSquare.addEventListener("mouseover", draw);
        eraser.addEventListener("click", erase);
        reset.addEventListener("click", resetBttn);
        grid.insertAdjacentElement("beforeend", gridSquare);
    }
}


// Add dynamic sizing to grid
function createGrid() {
    let gridSize = document.querySelector(".slider");
    makeGrid(gridSize.value);
}




// allow user to color squares in grid and 
function draw() {

    if (click) {
        this.style.backgroundColor = color.value;
    }
}

// if user clicks draw will turn off or back on
document.querySelector("body").addEventListener("click", function (e) {
    if (e.target.tagName != "BUTTON" && e.target.tagName != "INPUT") {
        if (click) {
            click = false;
        }
        else {
            click = true;
        }
    }
})

// allow user to erase squares
function erase() {
    click = true;
    color.value = "#FFFFFF";
}


// Reset grid 
function resetBttn() {
    click = false;
    let squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.backgroundColor = "white"
    })

}

createGrid()










