
const mainHeading = document.querySelector("#main-heading");
mainHeading.style.textAlign = "center";

const fruits = document.querySelector(".fruits");
fruits.style.backgroundColor = "gray";
fruits.style.padding = "30px";
fruits.style.margin = "30px";
fruits.style.width = "50%";
fruits.style.borderRadius = "5px";
fruits.style.listStyleType = "none";

const basketHead = document.querySelector("h2");
basketHead.style.marginLeft = "30px"

const fruitItems = document.querySelectorAll(".fruit");
for(let i=0;i<fruitItems.length;i++)
{
    fruitItems[i].style.backgroundColor = "white";
    fruitItems[i].style.padding = "10px";
    fruitItems[i].style.margin = "10px";
    fruitItems[i].style.borderRadius = "5px";
}

const oddFruitItems = document.querySelectorAll(".fruit:nth-child(odd)");
for(let i=0;i<oddFruitItems.length;i++)
{
    oddFruitItems[i].style.backgroundColor = "lightgray";
}




const basketHeading = document.querySelector("#basket-heading");
basketHeading.style.color = "brown";

const fruitEven = document.querySelectorAll(".fruit:nth-child(even)");
//console.log(fruitEven);
for(let i=0;i<fruitEven.length;i++)
{
    fruitEven[i].style.backgroundColor = "red";
    fruitEven[i].style.color = "white";
    
}