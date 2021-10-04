// GET Method should not be used when sending information to the web server, because it exposes data in the url
// Always use POST Method when sending Information to the web server.
// Validating the form fields
const validate = () => {
    const userid = document.registration.userid
    const pwd = document.registration.pwd
    const username = document.registration.username
    const address = document.registration.address
    const email = document.registration.email
    const zip = document.registration.zip
    const country = document.registration.country
    const sex = document.registration.sex

    
    if (userid.value == ""){
        alert ("Please enter your UserID");
        userid.focus()
        userid.style.border = "1px solid red";
        return false; // When you discover this error please stop here
    }
    if (username.value == ""){
        alert ("Please enter your UserID");
        username.focus()
        username.style.border = "1px solid red";
        return false; // When you discover this error please stop here
    }
    if (pwd.value == ""){
        alert ("Please enter your Password");
        pwd.focus()
        pwd.style.border = "1px solid red";
        return false; // When you discover this error please stop here
    }
    const email = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/

    if (email.value.match(email)){
        return true;
    } else {
        alert ("Please enter the proper email format");
        email.focus()
        email.style.border = "1px solid red";
    }

    const username = /^[0-9a-zA-Z]+$/ // regular expressions: The m indicates that this regular expression is intended for matching ( s would indicate substitution, covered next). The characters between the slashes ( / ) indicate the pattern of characters to match.

    if (username.value.match(username)){
        return true;
    } else {
        alert ("Please enter the proper email format");
        username.focus()
        username.style.border = "1px solid red";
    }

    const userid = /^[0-9a-zA-Z]+$/

    if (username.value.match(username)){
        return true;
    } else {
        alert ("Please enter the proper email format");
        username.focus()
        username.style.border = "1px solid red";
    }
    return true; 

}