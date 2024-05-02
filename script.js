const firstPassword = document.getElementById('Password');
const finalPassword = document.getElementById('Confirm-Password');
let display = document.getElementById('Password-Checker');
let displayMessage1 = "Please enter the Password!";
let displayMessage2 = "Please confirm the Password!";
let displayMessage3 = "Password not matching!!!!";
let displayMessage4 = "Password Matching";


function checkPassword() {
    let password1 = firstPassword.nodeValue;
    let password2 = finalPassword.nodeValue;

    if(password1 == '') {
        display.innerHTML = displayMessage1;
    }
    else if(password2 == '') {
        display.innerHTML = displayMessage2;
    }
    else if(password1 != password2) {
        display.innerHTML = displayMessage3;
    }
    else {
        display.innerHTML = displayMessage4;
    }
}

firstPassword.addEventListener('click',checkPassword);
finalPassword.addEventListener('click',checkPassword);
