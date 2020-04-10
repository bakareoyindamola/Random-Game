let colorBox = document.querySelector(".numbers")

function randomRGB() {
   return Math.floor( Math.random() * 256 );
}

function randomColor() {
    let color = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
    return color;
}

let html;


for ( let i = 1; i < 11; i++ ) {
    let rgbColor = randomColor();
    let div = document.createElement('div');
    div.setAttribute("style", `background-color:${rgbColor}`);
    div.textContent = i;
    colorBox.appendChild(div);

}

