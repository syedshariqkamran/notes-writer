const notescontainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function shownotes() {
    notescontainer.innerHTML = localStorage.getItem("notes");
}

shownotes();

function updatestorage() {
    localStorage.setItem("notes", notescontainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notescontainer.appendChild(inputBox).appendChild(img);
    updatestorage();
});

notescontainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updatestorage();
    } else if (e.target.tagName === "P") {
        const notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function() {
                updatestorage();
            };
        });
    }
});
document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
    document.execCommand("insertLineBreak");
    event.preventDefault(); I
    }
    });