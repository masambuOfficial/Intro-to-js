const userid = document.registration.userid;
const pwd = document.registration.pwd;
const username = document.registration.username;
const address = document.registration.address;
const email = document.registration.email;
const zip = document.registration.zip;
const country = document.registration.country;
const sex = document.registration.sex;


const validate = () =>{
    if (userid.value == ""){
        alert ("Please enter your UserID");
        userid.focus()
        userid.style.border = "1px solid red";
        return false; // When you discover this error please stop here
    }
    if (pwd.value == ""){
        alert ("Please enter your Username");
        pwd.focus()
        pwd.style.border = "1px solid red";
        return false; // When you discover this error please stop here
    }
    if (username.value == ""){
        alert ("Please enter your Username");
        username.focus()
        username.style.border = "1px solid red";
        return false; // When you discover this error please stop here
    }
};
var form = document.getElementsByTagName('form');
 form.addEventlistener('submit', validate); //  When we use a function name in another function as a parameter name we refer to it as a call back