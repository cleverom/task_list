// define UI variables

const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");


//function to load all event listeners
loadEventListeners();

function loadEventListeners() {
    // add task form
    form.addEventListener("submit", addTask);

    taskList.addEventListener("click", removeTask);

    clearBtn.addEventListener("click", clearTask);

    filter.addEventListener("keyup", filterTask);
}

function addTask(e){
     
    if(taskInput.value === ""){
        alert("Please enter a task")
    }

    //create list element.
    const li = document.createElement("li");

    // add a class.
    li.className = "collection-item";

    //create a text node and append to li

    li.appendChild(document.createTextNode(taskInput.value))
    //create new link element

    const link = document.createElement("a");

    link.className = "delete-item secondary-content";

    link.innerHTML = '<i class="fa fa-remove"></i>';

    li.appendChild(link);

    taskList.appendChild(li);

    taskInput.value = "";

    e.preventDefault();
}

function removeTask(e) {

    if(e.target.parentElement.classList.contains("delete-item")) {
        console.log(e.target)
       if(confirm("Are you sure you want to remove")) {
        e.target.parentElement.parentElement.remove();
       }
    }
}


function clearTask() {
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}


function filterTask(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll(".collection-item").forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = "block"
        }else {
            task.style.display = "none"
        }
    });
}