//Selector 
let task = document.getElementById('task');
let submit = document.getElementById('submit');
let taskUl = document.querySelector('.showTaskUl ul');
let complateUl = document.querySelector('.showComplateTask ul');
// For Create Element

//function here

//This Function For Create Li Elements
let createTask = (task) => {
    let listItem = document.createElement('li');
    let div = document.createElement('div');
    div.className = 'inputSpan';
    let input = document.createElement('input');
    input.type = 'checkbox';
    input.id = 'checkId';
    let p = document.createElement('p');
    p.innerText = task;
    div.appendChild(input);
    div.appendChild(p);
    let span = document.createElement('span');
    span.innerText = 'Edit';
    listItem.appendChild(div);
    listItem.appendChild(span);
    return listItem;
}

//This Is Bind In Function For CallBack

let bindTask = function(taskItem, goToComplate) {
    let li = taskItem;
    let input = li.querySelector('input');
    input.onchange = goToComplate;
}

let bindDelete = function(li, deleteBtn) {
    let listItem = li;
    let deleteButton = listItem.querySelector('.delete');
    deleteButton.onclick = deleteBtn;

}

let bindEditTask = function(li, editBtnClick) {
    let editBtn = li.querySelector('span');
    if (editBtn) {
        editBtn.onclick = editBtnClick;
    }
}

let bindUpdateData = function(li, enterInput) {
    let input = li.querySelector('.inputBox');
    input.onkeypress = enterInput;
}

//this Is CallBack Function For Update Data

let upDateFucntion = function(e) {
    let enterBtn = e.keyCode;
    let value = e.target.value;
    if (enterBtn === 13 && value === '') {
        alert('Please Den');
    } else if (enterBtn === 13) {
        let listItem = createTask(value);
        taskUl.appendChild(listItem);
        e.target.parentNode.remove();
        bindTask(listItem, toComplate);
    }
    for (let i = 0; i < taskUl.children.length; i++) {
        bindEditTask(taskUl.children[i], editListItem);
    }
}

// This Is CallBack Function For Delete Task
let deleteItem = function(e) {
    let del = e.target.parentNode;
    del.className = 'animation';
    del.addEventListener('transitionend', () => {
        del.remove();
    })
}

// This Is CallBack Function For To Complate Task
let toComplate = function(e) {
    let div = e.target.parentNode;
    let listItem = div.parentNode;
    let input = listItem.querySelector('input');
    let edit = listItem.querySelector('span');
    input.remove();
    edit.remove();
    let deleteBtn = document.createElement('span');
    deleteBtn.className = 'delete';
    deleteBtn.innerText = 'Delete';
    listItem.appendChild(deleteBtn);
    complateUl.appendChild(listItem);
    bindDelete(listItem, deleteItem);
}

// This Is CallBack Function For Edit List Item
let editListItem = function(e) {
    let listItem = e.target.parentNode;
    let p = listItem.querySelector('p');
    let text = p.innerText;
    let div = listItem.querySelector('div');
    div.remove();
    let span = listItem.querySelector('span');
    span.remove();
    let input = document.createElement('input');
    input.type = 'text';
    input.className = 'inputBox';
    input.value = text;
    listItem.appendChild(input);

    ///Bind For Update
    bindUpdateData(listItem, upDateFucntion);
    // input.addEventListener('keypress', (e) => {
    //     if (e.keyCode === 13) {
    //         let editValue = e.target.value;
    //         text = editValue;
    //         let li = createTask(text);
    //         taskUl.appendChild(li);
    //         e.target.parentNode.remove();
    //         console.log(e.target)
    //     }
    // })
}

//This Function For Task Add To Ul
let addTask = function() {
    let listItem = createTask(task.value);
    taskUl.appendChild(listItem);

    task.value = '';
    //bind Input Checkbox Click This Li TO complate Task
    bindTask(listItem, toComplate);


    //bind Edit Button Click This For This Li Edit
    bindEditTask(listItem, editListItem);
}


//eventLisener

submit.addEventListener('click', () => {
    if (task.value === '') {
        alert("Please Insert a Task");
    } else {
        addTask();
    }
});

task.addEventListener('keypress', (e) => {
    if (task.value === '' && e.keyCode == 13) {
        alert("Please Insert a Task");
    } else if (e.keyCode == 13) {
        addTask();
    }
});


//This Code For Html Direct li element
for (let i = 0; i < taskUl.children.length; i++) {
    bindTask(taskUl.children[i], toComplate)
}
for (let i = 0; i < taskUl.children.length; i++) {
    bindEditTask(taskUl.children[i], editListItem);
}
for (let i = 0; i < complateUl.children.length; i++) {
    bindDelete(complateUl.children[i], deleteItem)
}