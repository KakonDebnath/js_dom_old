let btn = document.getElementById('btn');
let body = document.getElementById('body');
btn.addEventListener('click',function(){
    body.style.backgroundColor = colorGenerator();
});

function colorGenerator(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    return `rgb(${red},${green},${blue})`;
}