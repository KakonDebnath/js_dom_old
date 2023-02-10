let editBtn = document.getElementById('editBtn');
let deleteBtn = document.getElementById('deleteBtn');

deleteBtn.addEventListener('click', function(e) {
    let element = e.target.parentNode;
    let li = element.parentNode;
    li.className = 'animation';
    li.addEventListener('transitionend', function() {
        li.remove();
    });
})