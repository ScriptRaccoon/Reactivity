const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

form.addEventListener("submit", handleSubmit);

let list = [];

function handleSubmit(e) {
    e.preventDefault();
    const text = input.value;
    list.push(text);
    const li = document.createElement("li");
    li.append(text + " ");
    const button = document.createElement("button");
    button.innerText = "Delete";
    button.addEventListener("click", () => handleDelete(li, text));
    li.append(button);
    ul.appendChild(li);
}

function handleDelete(li, text) {
    li.remove();
    list = list.filter((x) => x != text);
}
