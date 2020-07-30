let input = document.getElementById("userInput")
let addButton = document.getElementById("addButton");
let clearButton = document.getElementById("clearButton");
let ul = document.querySelector("ul");


function inputLength() {
    return input.value.length;
}

function createListTask() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.className = "listItem";
    let deleteButton = document.createElement("button")
    deleteButton.appendChild(document.createTextNode("Delete Task"));
    deleteButton.className = "delete";
    li.appendChild(deleteButton);
    ul.appendChild(li);
    input.value = "";
}

function addTaskOnClick() {
    if (inputLength() > 0) {
        createListTask();
    }
}

function addTaskOnKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListTask();
    }
}

function clearListOnClick() {
    if (ul) {
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
    }
}

function deleteTaskOnClick(e) {
    if (e.target.className === "delete") {
        event.target.parentElement.remove();
    }
}

addButton.addEventListener("click", addTaskOnClick);

input.addEventListener("keypress", addTaskOnKeypress);

clearButton.addEventListener("click", clearListOnClick);

ul.addEventListener("click", deleteTaskOnClick);
