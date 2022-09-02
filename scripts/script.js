let click = false;


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

    // gives squares coloring function
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
// allow user to color squares in grid and 
function draw() {
    let color = document.querySelector("#colorSelect");
    if(click) {
        this.style.backgroundColor = color.value;
    }
    }     

// if user clicks draw will turn off or back on
document.querySelector("body").addEventListener("click", function(e) {
   if(e.target.tagName != "BUTTON") {
    if(click) {
    click = false;
   } 
   else {
    click = true;
   }
}
})



// Also allow user to reset and eraser grid squares













