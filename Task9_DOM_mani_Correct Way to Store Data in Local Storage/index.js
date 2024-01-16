// Write your code below:

function handleFormSubmit(event)
{
    event.preventDefault();
    const userName = document.querySelector("#username").value;
    const userEmail = document.querySelector("#email").value;
    const userPhone = document.querySelector("#phone").value;
    
    let userObject = {

        "userName" : userName,
        "userEmail" : userEmail,
        "userPhone" : userPhone,
    };

    //const userObjectSer = JSON.stringify(userObject);
   localStorage.setItem("User Details", JSON.stringify(userObject));
    const name = JSON.parse(localStorage.getItem("User Details")).userName;
    console.log(name);
//   var ud = {
//     "username":event.target.username.value,
//     "email":event.target.emal.value,
//     "phone":event.target.phone.value
//   };
//   localStorage.setItem("User Details", JSON.stringify(ud));

  

}
//module.exports = handleFormSubmit;