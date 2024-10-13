let inputbox = document.getElementById("inpitem");
let Addbutn = document.getElementById("btn");

let todolist = {
    item:[],
    addItem: function(item) {
        this.item.push(item);
        this.render();
    },
    render: function () {
        let addelement = document.getElementById("todolistitem");
        addelement.innerHTML = ""; // Clear existing list items
        this.item.forEach(function(item) {
            let listItem = document.createElement("li");
            listItem.textContent = item;
            addelement.appendChild(listItem);
        });
    }
};

Addbutn.addEventListener("click", function() {
    let itemText = inputbox.value.trim(); // Trim whitespace
    if (itemText === "") {
        alert("Please enter a to-do item.");
        return;
    }
    todolist.addItem(itemText);
    inputbox.value = ""; // Clear input box after adding
});
