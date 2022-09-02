let click = true;


// Create the grid
function makeGrid(size){
    const grid = document.querySelector(".grid");
    
    // Create columns and rows in grid

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // Loop will create rows and columns and append them to the grid
    for(let i = 0; i < (size**2); i++) {
    let gridSquare = document.createElement("div");
    gridSquare.classList.add("square");
    
    gridSquare.addEventListener("mouseover", draw);  
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
function draw() {
    if(click) {
        this.style.backgroundColor = "black";
    }

    }     

document.querySelector("body").addEventListener("click", function() {
   if(click) {
    click = false;
   } 
   else {
    click = true;
   }
})



// Also allow user to reset and eraser grid squares













