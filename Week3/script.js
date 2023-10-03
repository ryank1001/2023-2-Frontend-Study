let itemList = [];

const todoList = document.getElementById("todo_list");
const doneList = document.getElementById("done_list");

todoList.innerHTML = "";
doneList.innerHTML = "";

itemList.forEach((savedItem) => {
    const item = document.createElement("li");

    const itemText = document.createElement("span");
    itemText.className = "item_text";
    itemText.addEventListener("click", toggleItem);
    itemText.innerText = savedItem.text;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete_button";
    deleteButton.addEventListener("click", removeItem);
    deleteButton.innerText = "🧹";

    item.appendChild(itemText);
    item.appendChild(deleteButton);

    if (!savedItem.isDone) {
        todoList.appendChild(item);
    } else {
        doneList.appendChild(item);
    }
});

const addTodoList = () => {
    event.preventDefault;
    const inputObject = {
        id: Date.now(),
        text: document.getElementById("input_to_do_text").value,
        isDone: false,
    };
};

const toggleItem = (e) => {
    const itemObject = itemList.find(
        (inputObject) => inputObject.text === e.target.innerText
    );
    itemObject.isDone = !itemObject.isDone;
};