// Add the Edit Button:

const fruit = document.querySelectorAll('.fruit');
for(let i=0;i<fruit.length;i++)
{
    const editBtn = document.createElement("button");
    
    editBtn.innerHTML = 'Edit'; 
    //or 
    //editBtnText = document.createTextNode("Edit");
    //editBtn.appendChild(editBtnText);

    editBtn.className = "edit-btn";

    fruit[i].appendChild(editBtn);
    console.log(fruit[i]);
}

// Implement the code as in video but with one extra 'Edit' button in 'li'

const form = document.querySelector("form");
const fruits = document.querySelector(".fruits");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const fruitToAdd = document.getElementById("fruit-to-add");

    // create li element
    const newLi = document.createElement("li");
    
    newLi.innerHTML = fruitToAdd.value + '<button class="delete-btn">x</button>';

    fruits.appendChild(newLi);

});

fruits.addEventListener("click", function(event){

    if(event.target.classList.contains("delete-btn"))
    {
        const fruitToDelete = event.target.parentElement;
        fruits.removeChild(fruitToDelete)
    }

});