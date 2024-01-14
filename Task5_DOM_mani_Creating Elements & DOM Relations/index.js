// Write your code below:

// createElement
const subHeading = document.createElement('h3');

// createTextNode
const subHeadingText = document.createTextNode("Buy high quality organic fruits online");

// appendChild
subHeading.appendChild(subHeadingText);


const firstDiv = document.getElementById("header");

firstDiv.appendChild(subHeading);

subHeading.style.fontStyle = "italic";


// createElement
const para = document.createElement('p');

// createTextNode
const paraText = document.createTextNode("Total fruits: 4");

// appendChild
para.appendChild(paraText);


const divs = document.getElementsByTagName("div");
const secondDiv = divs[1];
//ERROR=>const fruits = document.getElementsByClassName("fruits"); 
const fruits = document.querySelector(".fruits");

// insertBefore
secondDiv.insertBefore(para,fruits);

// setAttribute
para.setAttribute("id","fruits-total");