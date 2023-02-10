let textAreaInput = document.getElementById('text');
let submit = document.getElementById('submit');
let msg = document.getElementById('msg');
let allTask = document.getElementById('allTask');
let data = {};

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    formValidation();
});

let formValidation = ()=>{
    if(textAreaInput.value === ''){
        msg.innerText = "Please Insert Valid Task";
    }
    else{
        msg.innerText = "";
        acceptData();
    }
}

let acceptData = ()=>{
    data.text = textAreaInput.value;
    console.log(data.text);
    addTask();
}

let addTask = ()=>{
    allTask.innerHTML += 
    `
        <div class="taskItem">
            <p>${data.text}</p>
            <div class="action">
                <span onClick="updateTask(this)" class="edit" id="edit">Edit</span>
                <span onClick="deleteTask(this)" class="delete" id="delete">Delete</span>
            </div>
        </div>
    `;
    textAreaInput.value = '';
}
let deleteTask = (e)=>{
    let taskItem = e.parentNode.parentNode;
    taskItem.classList.add('deleteAnimation');
    taskItem.addEventListener('transitionend', ()=>{
        taskItem.remove();
    });
}

let updateTask = (e)=>{
    let taskItem = e.parentNode.parentNode;
    taskItem.classList.add('editAnimation');
    taskItem.addEventListener('transitionend', ()=>{
        textAreaInput.value = e.parentNode.previousElementSibling.innerText;
        taskItem.remove();
    });
}