// Write your code below:

const form = document.querySelector("form");

form.addEventListener("submit",  function handleFormSubmit(event){

    event.preventDefault();
    console.log(event.target);
    const userNameEntered = document.querySelector("#user-name").value;
    const userEmailEntered = document.querySelector("#user-email").value;
    const userPhoneEntered = document.querySelector("#user-phone").value;

// method 1 = to store data in local storage
  var formData ={
  userName : userNameEntered,
  email : userEmailEntered,
  phone : userPhoneEntered
};
  localStorage.setItem("formData", JSON.stringify(formData));

// OR  method 2 = to store data in local storage
//     localStorage.setItem("userNameEntered",userNameEntered);
//     localStorage.setItem("userEmailEntered",userEmailEntered);
//     localStorage.setItem("userPhoneEntered",userPhoneEntered);

    
});
