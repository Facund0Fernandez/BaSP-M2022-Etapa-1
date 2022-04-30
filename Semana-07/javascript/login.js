document.addEventListener("DOMContentLoaded", function (event) {

    var validation = 0;

    /* Email validation */
    var emailInputElement = document.getElementById("email");
    var alertEmail = document.getElementById("alert-email");
    var alertMessageEmail = document.createTextNode("Insert a valid email format.");

    emailInputElement.onblur = function () {
        if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(emailInputElement.value)) {
            emailInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validation++;
        } else {
            emailInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertEmail.appendChild(alertMessageEmail);
        }
    }
    emailInputElement.onfocus = function () {
        emailInputElement.style = "border-color: none";
        alertEmail.removeChild(alertMessageEmail);
    }

    /* Password validation */
    var passwordInputElement = document.getElementById("password");
    var alertPassword = document.getElementById("alert-password");
    var alertMessagePassword = document.createTextNode("Insert a valid password format.");

    passwordInputElement.onblur = function () {
        var numberSum = false;
        for (var i = 0; i < passwordInputElement.value.length; i++) {
            if (isNaN(passwordInputElement.value[i]) == false) {
                numberSum = true;
            }
        }
        var letterSum = false;
        for (var i = 0; i < passwordInputElement.value.length; i++) {
            if (isNaN(passwordInputElement.value[i]) == true) {
                letterSum = true;
            }
        }
        if (passwordInputElement.value.length > 8 && numberSum == true && letterSum == true) {
            passwordInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validation++;
        } else {
            passwordInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertPassword.appendChild(alertMessagePassword);
        }
    }
    passwordInputElement.onfocus = function () {
        passwordInputElement.style = "border-color: none";
        alertPassword.removeChild(alertMessagePassword);
    }

    /* Agree event */
    var agreeLogin = document.getElementById("agreelogin");
    var emailAgree = document.getElementById("email-agree");
    var passwordAgree = document.getElementById("password-agree");

    function infoAgree() {
        if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(emailInputElement.value)) {
            var emailCorrectText = "Email is correct: ";
            emailAgree.innerHTML = emailCorrectText + emailInputElement.value;
        } else {
            var emailIncorrectText = "Email is incorrect: ";
            emailAgree.innerHTML = emailIncorrectText + emailInputElement.value;
        }
        if (passwordInputElement.value.length > 8 && numberSum == true && letterSum == true) {
            var passwordCorrectText = "Password is correct: ";
            passwordAgree.innerHTML = passwordCorrectText + passwordInputElement.value;
        } else {
            var passwordIncorrectText = "Password is incorrect: ";
            passwordAgree.innerHTML = passwordIncorrectText + passwordInputElement.value;
        }
    }
    agreeLogin.onclick = function (e) {
        e.preventDefault();
        infoAgree();
    }
});


