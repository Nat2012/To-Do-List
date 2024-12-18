function addItem() {
    let item = document.getElementById("input").value;
    let list = document.getElementById("To-Do");
    const newItem = document.createElement('p');
    newItem.textContent = item;
    list.appendChild(newItem);
}
