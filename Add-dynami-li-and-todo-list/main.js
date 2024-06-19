const add_li = document.getElementById('add_li');
const ul_elem = document.getElementById('main_ul');
add_li.addEventListener('click', function(){
    const userData = prompt("Enter Text to append in UL");
    if(userData){
        
        const createLiElem = document.createElement('li');
        createLiElem.innerHTML = userData;
        ul_elem.appendChild(createLiElem);
    }
})
const addItem = document.getElementById('addItem');
const ulToDo = document.getElementById('toDo');
let counter = 1;
addItem.addEventListener('click', function(){
    const toDoData = prompt("Enter ToDo Item into List");
    if(toDoData){
        const createLiElem = document.createElement('li');
        createLiElem.id = counter;
        createLiElem.innerHTML = '<span>' +toDoData+ ' <button onclick="removeTodo('+counter+')">x</button></span>';
        ulToDo.append(createLiElem);
        counter++;
    }
})

function removeTodo(counter){
    const findElem = document.getElementById(counter).remove();
}