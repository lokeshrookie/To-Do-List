const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');




const btnAdd = document.getElementById('btnAdd');

btnAdd.addEventListener('click', ()=> {
    console.log(inputBox.value)
    // code to add task to the list.
    if(inputBox.value == ''){
        alert("Please enter task name!");
    }
    else{
       let li = document.createElement('li');
       li.innerHTML = inputBox.value;
       listContainer.appendChild(li);
       let span = document.createElement('span');
       span.innerHTML = "\u00d7";
       li.appendChild(span);
       console.log(li);
    }
    inputBox.value = "";
    saveDataToLocalStorage(); // loads data after loading the page.
})


listContainer.addEventListener('click', (e) => {
    console.log(e.target.parentElement.parentElement);

    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveDataToLocalStorage(); // updates data after changing status of a task.
    }
    if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveDataToLocalStorage(); // updates data after deleting any task.
    }

});


function saveDataToLocalStorage(){
    localStorage.setItem('todo', listContainer.innerHTML);
}


function showTasks(){
    listContainer.innerHTML = localStorage.getItem('todo');
}

showTasks();
