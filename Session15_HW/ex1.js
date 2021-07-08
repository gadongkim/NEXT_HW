const $ulElement = document.querySelector('ul');

$ulElement.addEventListener("click", (e) => {

    const $target = e.target;
    if($target.classList.contains('close')){
        const $parentTarget = $target.parentElement;
        $parentTarget.style.display = "none";
        console.dir($parentTarget)
        const deleteItem = $parentTarget.childNodes[1].innerText;
        deleteTodoList('todolist', deleteItem);
    }
    $target.classList.toggle('checked');
})

function newElement() {
    const inputValue = document.getElementById("myInput").value;
    const $liElement = `
    <li>
    <span>${inputValue}</span>
    <span class="close">&#215;</span>
    </li>
    `

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        $ulElement.insertAdjacentHTML("beforeend", $liElement);
        addTodoList('todolist', inputValue)
    }
    // 초기화?
    document.getElementById("myInput").value = "";
}

function init() {
    const todolist = getTodoList('todolist')
    for (let i = 0; i <todolist.length; i++){
        $ulElement.insertAdjacentHTML('beforeend',
        `<li>
        <span>${todolist}</span>
        <span class="close">&#215;</span>
        </li>
        `)
    }
}

function getTodoList(key) {
    return localStorage.getItem(key) ? localStorage.getItem(key).split(',') : []
}

function addTodoList(key, value) {
    const todolist = getTodoList(key);
    return localStorage.setItem(key,[...todolist,value])
}

function deleteTodoList(key,value) {
    const todolist = getTodoList(key)
    return localStorage.setItem(key, todolist.filter(todo => todo !== value))
}

init()

