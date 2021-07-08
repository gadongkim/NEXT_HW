const $ulElement = document.querySelector('ul');

//리스트 체크표시 or 삭제
$ulElement.addEventListener("click", (e) => {
    const $target = e.target;
    if($target.classList.contains('close')){
        const $parentTarget = $target.parentElement.parentElement;
        $parentTarget.style.display = "none";
        const deleteParent = $parentTarget.children[1]
        const deleteItem = deleteParent.children[0].innerText
        console.log(deleteItem)
        deleteTodoList('todolist', deleteItem)
    }
    $target.parentElement.classList.toggle('checked');
})


//리스트 추가
function newElement() {
    const inputValue = document.getElementById("myInput").value;
        var x = Math.floor((Math.random()*10)+1);
        console.log(x);
       
        const $liElement = `
        <li>
        <img class ="img" src="circle/r${x}.png" style="width:300px">
        <div class ="content">
            <span class ="text">${inputValue}</span>
            <span class="close">&#215;</span>
        </div>
        </li>
        `
        if (inputValue === '') {
            alert("You must write something!");
        } else {
            $ulElement.insertAdjacentHTML("beforeend", $liElement);
            addTodoList('todolist', inputValue)
        }
    document.getElementById("myInput").value = "";
}



function init() {
    const todolist = getTodoList('todolist')
    for (let i = 0; i <todolist.length; i++){
        var x = Math.floor((Math.random()*10)+1);

        $ulElement.insertAdjacentHTML('beforeend',`
        <li>
        <div class ="content">
        <img class ="img" src="circle/r${x}.png" style="width:300px">
            <span class ="text">${inputValue}</span>
            <span class="close">&#215;</span>
        </div>
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

