document.addEventListener("DOMContentLoaded", () => {});

const addItem = () => {    
    const taskUser = document.querySelector('#task').value.trim()
    const priority = document.getElementById('priority').value
    const todo = document.getElementById('listTodo');
    const done = document.getElementById('listDone');
    
    const listContent = document.createElement('li');

    let getDate = document.getElementById('date').value
    const formatDate = {day: 'numeric', month: 'long', year: 'numeric' }
    const containerDate =  new Date(getDate).toLocaleDateString('id-ID', formatDate)
    
    
    
    const chkBox = document.createElement('input')
    chkBox.type = 'checkbox'
    chkBox.id = 'cBox'
    
    
    const containerTxtArea = document.createElement('span')
    containerTxtArea.textContent = taskUser
    containerTxtArea.id  = 'taskContainer'
    
    const span = document.createElement('span')
    span.appendChild(chkBox)
    span.appendChild(containerTxtArea) 
    
    
    listContent.textContent = `${containerDate} ${priority} || `
    
    
    chkBox.onchange = function(){
        document.querySelector('#taskContainer').classList.toggle('clear');    
        done.appendChild(listContent)
    }

    listContent.appendChild(span)
    todo.appendChild(listContent)
    
    document.getElementById('task').value = ''
}


const addProfile = () => {
    const name = prompt("Siapa nama anda?");
    const jabatan = prompt("Jabatan anda?");
    let getName = document.getElementById('profile-name');
    let getJabatan = document.getElementById('jabatan');
    getName.innerHTML = `${name}`;
    getJabatan.innerHTML = `Jabatan: ${jabatan}`;
    
}



const showDate = () => {
    const today = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    document.getElementById("dateDisplay").innerHTML = today.toLocaleDateString('id-ID', options);
}


const clearData = () => {
  
    const liTodo = document.getElementById('listTodo')
    const liDone = document.getElementById('listDone')

    document.getElementById('deleteBtn').addEventListener('click', function() {

        // Clear the To-Do list
        while (liTodo.firstChild) {
            liTodo.removeChild(liTodo.firstChild);
        }
    
        // Clear the Done list
        while (liDone.firstChild) {
            liDone.removeChild(liDone.firstChild);
        }
    });
}



