const input = document.getElementById("password");
const add = document.getElementById("add");
const list = document.getElementById("tasklist");
const notif = document.getElementById("notif");
const h4 = document.getElementById("h4");
let number = 0;
add.onclick = function(){
   

    if(input.value === ""){
        return;
    }
    else{
         number += 1;
        notif.textContent = number; 
        const container = document.createElement("div");
        container.className = "task-container";
        const container2 = document.createElement("div");
        container2.className = "button-container";
        const li = document.createElement("li");
        li.textContent = input.value;
        const importantBtn = document.createElement("button");
        importantBtn.textContent = "important";
        importantBtn.onclick = function(){
            li.className ="important";
            importantBtn.remove();
        }
        const removeBtn  = document.createElement("button");
        removeBtn.textContent = "X"; 
        removeBtn.onclick = function(){
            container.remove();
            number -= 1;
            notif.textContent = number; 

        }
   
        container.appendChild(li);
        container2.appendChild(removeBtn);
        container2.appendChild(importantBtn);
        container.appendChild(container2);
        list.appendChild(container);

        input.value = "";
    
        }
    
    
    

}
