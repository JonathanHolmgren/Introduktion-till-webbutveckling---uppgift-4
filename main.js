// vi börjar med variabler

const input = document.querySelector("#inputToDo");
const addBtn = document.querySelector("button");
const list = document.querySelector("ul");
const msg = document.querySelector("#message");
const showCompleted = document.querySelector("p");
const todoArray = [];

let text; // texten från input
let message; // texten som ska visas som meddelande
let completedCount = 0; // antal som är completed

//här kommer kod för saker som ska hända
addBtn.addEventListener(
    "click",

    function(){
        let text = input.value;
    if(text.length == 0){
        msg.innerHTML = "Du måste skriva något!";
       //Skapa fel meddelande
        return;
    }
    msg.innerHTML = "";

    const todoObject = {};

    todoObject.todo = text;
    todoObject.status = "not complete";

        todoArray.push(todoObject);

        // skapa html-element för en ny li
        const item = document.createElement("li");
        list.appendChild(item);

        const itemLabel = document.createElement("span");
        itemLabel.innerText = text;

        item.appendChild(itemLabel);

        //lyssnare itemLabel
        itemLabel.addEventListener(
            "click",

            function(){
                item.setAttribute("class", "completed");
                // Samma sak: itemLabel.classList.add("completed")
                completedCount++;
                //Visa meddelande
                //showCompleted.innerText = `${completedCount} är klara`;
                 showCompleted.innerText = completedCount + " är klara";
            }

        )


    }
)