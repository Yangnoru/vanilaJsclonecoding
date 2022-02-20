const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
let toDos = [];
const TODOS_KEY = "todos"

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
    /*위 코드를 통해 우리는 localstorage에 string형태로 Set했다. */
}

function deleteToDo(event){
    const targetli = event.target.parentElement;
    targetli.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(targetli.id));
    saveToDos();
}

function paintToDo(newToDo){
    const li = document.createElement("li")
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText= newToDo.text;
    const button = document.createElement("button");
    button.innerText = "X" ;
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value=""
    const newTodoObj = {
        text:newTodo,
        id: Date.now() 
    }
    toDos.push(newTodoObj);   /* 사용자에게 받은 newTodo를 array에 집어넣기 */
    paintToDo(newTodoObj);
    saveToDos();          /* toDos array에 있는 요소들을 localstorage에 저장 */ 
}


toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos=localStorage.getItem(TODOS_KEY);  /* savedToDos는 string형태이다*/

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);  /*parsedToDos는 array이다 */
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);

}