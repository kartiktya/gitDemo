// Add input element inside form, before button, to take fruit description
    
    // creating new input element
    const newInputElement = document.createElement("input");

    newInputElement.setAttribute("type","text");
    newInputElement.setAttribute("name","fruit");
    newInputElement.setAttribute("id","description");


    const btn = document.querySelector("button");   // will give first button element (Add button)
    const form = document.querySelector("form");

//  parent(form)      childToAdd(newInputElement)           (btn) child before new child will be inserted 
    form.insertBefore(newInputElement,btn);

    
    
    // Adding para tag as a second child and before delete button(3rd child li) in already existing 4 li
    // para tag will be used for description of fruit and also for filtering
    const fruitItems = document.querySelectorAll(".fruit");
    for(let i=0;i<fruitItems.length;i++)
    {
        // creating new para tag
        const newPara = document.createElement("p");

        const buttonList = document.querySelectorAll(".delete-btn"); 
        
        fruitItems[i].insertBefore(newPara,buttonList[i]);
        
    }




// Show the fruit description in italics on the next line

    const fruits = document.querySelector(".fruits");

    form.addEventListener("submit", function(event){
        event.preventDefault();

        const fruitToAdd = document.getElementById("fruit-to-add");
        const description = document.getElementById("description");
   
        // creating li element
        const newLi = document.createElement("li");
        newLi.className = "fruit";
    
        newLi.innerHTML = fruitToAdd.value +"<p style='font-style: italic;'>"+ description.value +"</p>"+ '<button class="delete-btn">x</button>';

        fruits.appendChild(newLi);

    });


// Create a filter that shows only those fruits whose either name or description or both matches the entered text

    const filter = document.getElementById("filter");
    
    filter.addEventListener("keyup", function(event){
    
        const textEntered = event.target.value.toLowerCase();
        const fruitItems = document.querySelectorAll(".fruit");
    
        for(let i=0;i<fruitItems.length;i++)
        {
            const currentFruittext = fruitItems[i].firstChild.textContent.toLocaleLowerCase();

            //adding para tag because descriptionText for first 4 li will be null .Because the last
            //li we added has description(para tag) and rest 4 li don't have 
            const descriptionText = fruitItems[i].firstElementChild.textContent.toLocaleLowerCase();
        
            if(currentFruittext.indexOf(textEntered)==-1 && descriptionText.indexOf(textEntered)==-1)
            {
                fruitItems[i].style.display = "none";
            }
            else
                fruitItems[i].style.display = "flex";
        }

    });




    // delete functionality
    fruits.addEventListener("click", function(event){

        if(event.target.classList.contains("delete-btn"))
        {
            const fruitToDelete = event.target.parentElement;
            fruits.removeChild(fruitToDelete)
        }
    
    });