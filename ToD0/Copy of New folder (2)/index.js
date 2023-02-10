let inputText = document.getElementById("taxtName");
let addTask = document.getElementById("addTask");
let ul = document.querySelector("#showTask ul");

let addTaskClick = addTask.addEventListener("click", function() {
    inputText = inputText.value;

})

function createLi() {
    let link = document.createElement("a");
    link.setAttribute("href", "#");
    link.innerText = inputText;
    let li = document.createElement("li");
    ul.appendChild(li);
    li.appendChild(link);
    inputText = "";
    console.log(li);
}