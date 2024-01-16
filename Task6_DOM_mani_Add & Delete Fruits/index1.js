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

}

// Implement the code as in video but with one extra 'Edit' button in 'li'

const form1 = document.querySelector("form");

form1.addEventListener("submit",function(event){
    event.preventDefault();

    const fruitToAdd1 = document.querySelector("#fruit-to-add");
    console.log(fruitToAdd1);

    const newLi1 = document.createElement("li");

    newLi1.append(fruitToAdd1.value);

    const newBtn1 = document.createElement("button");
    const newBtn1Text = document.createTextNode("x");
    newBtn1.appendChild(newBtn1Text);
    newBtn1.className("delete-btn");

    newLi1.appendChild(newBtn1);


    const fruits1 = document.querySelector(".fruits");
    fruits1.appendChild(newLi1);
});

// to delete
fruits1.addEventListener("click",function(event){

        if(event.target.classList.contains("delete-btn"))
        {
            const fruitToDelete = event.target.parentElement;
            fruits1.removeChild(fruitToDelete);
        }

});
