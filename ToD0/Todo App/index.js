let taskName = document.getElementById("taskName");
let submit = document.querySelector("form");
let incomplateUl = document.querySelector(".incomplateTask ul");
let complateUl = document.querySelector(".complateTask ul");

let createTask = function(task) {
    let li = document.createElement("li");
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    let label = document.createElement("label");
    label.innerText = task;
    li.appendChild(checkBox);
    li.appendChild(label);
    return li;

}
let deleteFn = function() {
    let li = this.parentNode;
    let ul = li.parentNode;
    ul.removeChild(li);
}


let gotoComplate = function() {
    let li = this.parentNode;
    let checkBox = li.querySelector('input[type="checkbox"]');
    checkBox.remove();
    let deleteBtn = document.createElement("span");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete";
    li.appendChild(deleteBtn);
    complateUl.appendChild(li);
    let deleteItem = li.querySelector('.delete');
    deleteItem.addEventListener('click', deleteFn);
}


let addTask = function(e) {
    e.preventDefault();
    let li = createTask(taskName.value);
    incomplateUl.appendChild(li);
    taskName.value = "";
    let checkBox = li.querySelector('input[type="checkbox"]');
    checkBox.onchange = gotoComplate;
}

submit.addEventListener('submit', addTask);