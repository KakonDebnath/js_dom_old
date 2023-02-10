let body = document.getElementById("container");
let btn = document.getElementById("btn");
let inputText = document.getElementById("inputText");


btn.addEventListener("click", ()=>{
    rgbColorGenerator();
});

const rgbColorGenerator = ()=>{
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let color = `rgb(${red}, ${green}, ${blue})`;
    changeBgColor(color);
}

const changeBgColor = (color)=>{
    body.style.backgroundColor = color;
    inputText.value = color;
}



