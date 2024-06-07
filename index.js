let containers = document.getElementsByClassName("container");
//let color = ["#3C9EE7", "#E7993C", "#E73C99", "#3CE746", "#E7993C"];
let n=parseInt(prompt("size of grid"));
if (containers.length > 0) {
    let container = containers[0];
    container.style.gridTemplateColumns = `repeat(${n}, 30px)`;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let part = document.createElement("div");
            part.classList.add("grid");
            container.appendChild(part);
            part.addEventListener("mouseover", mouseOver); 
        }
    }
}

function mouseOver() {
    let random=getRandomColor();
    this.style.background =random; 
}
function getRandomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb("+r+","+g+","+b+")"
}
