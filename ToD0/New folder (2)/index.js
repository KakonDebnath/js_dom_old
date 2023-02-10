let inputText = document.getElementById("taxtName");
let addTask = document.getElementById("addTask");
let ul = document.querySelector("#showTask ul");


addTask.addEventListener("click", function() {
    if (inputText.value == "") {
        alert('Please Insert A Value');
    } else {

        //Create A List Item
        let listItem = document.createElement("li");
        let leftSpan = document.createElement("span");
        leftSpan.innerText = inputText.value;
        let rightSpan = document.createElement("span");
        rightSpan.className = "deleteBtn";
        rightSpan.id = "deleteBtn";
        rightSpan.innerText = "Delete";
        let editBtn = document.createElement("span");
        editBtn.className = "editBtn";
        editBtn.id = "editBtn";
        editBtn.innerText = "Edit"
        listItem.appendChild(leftSpan);
        listItem.appendChild(editBtn);
        listItem.appendChild(rightSpan);
        ul.appendChild(listItem);
        inputText.value = "";

        deletefunction(listItem);

    }
})

function deletefunction(liItem) {
    let listItem = liItem;
    listItem.addEventListener("click", function(event) {
        let clickValue = event.target;
        if (clickValue.className === "deleteBtn") {
            listItem.remove();
        } else {
            console.log("NO")
        }
    })

}