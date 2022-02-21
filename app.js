const inputBox = document.querySelector(".inputtext")
const addBtn = document.querySelector(".btn")
const todoList = document.querySelector(".plan-list")
const deleteAllBtn = document.querySelector(".footerbtn")

inputBox.onkeyup = ()=>{
    let userDate = inputBox.value
    if(userDate.trim() != 0){
        addBtn.classList.add("active")
    }else{
        addBtn.classList().remove("active")
    }
}
showTasks()

addBtn.onclick = ()=> {
    let userDate = inputBox.value;
    let getLocalStorage = localStorage.getItem("New Todo")
    if(getLocalStorage == null){
        listArr = []
    }else{
        listArr = JSON.parse(getLocalStorage)
    }
    listArr.push(userDate)
    localStorage.setItem("New Todo", JSON.stringify(listArr))
    showTasks()
    addBtn.classList().remove("active")
}

function showTasks(){
    let getLocalStorage = localStorage.getItem("New Todo")
    if(getLocalStorage == null){
        listArr = []
    }else{
        listArr = JSON.parse(getLocalStorage)
    }
    const pendingNumb = document.querySelector(".pendingNumb")
    pendingNumb.textContent = listArr.length
    if(listArr.length > 0){
        deleteAllBtn.classList.add("active")
    }else{
        deleteAllBtn.classList.remove("active")
    }
    let newLiTag = '';
    listArr.forEach((element, index) => {
        newLiTag += `<li> ${element} <span onclick="deleteTask(${index})";><i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag;
    inputBox.value = "";
}

function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New Todo")
    listArr = JSON.parse(getLocalStorage)
    listArr.splice(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(listArr))
    showTasks()
}   

deleteAllBtn.onclick = ()=>{
    listArr = []
    localStorage.setItem("New Todo", JSON.stringify(listArr))
    showTasks()
}