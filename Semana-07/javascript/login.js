document.addEventListener("DOMContentLoaded", function (event) {

    var validation;

    /* Email validation */
    var emailInputElement = document.getElementById("email");
    var alertEmail = document.getElementById("alert-email");
    var alertMessageEmail = document.createTextNode("Insert a valid email format.");

    function emailValidation() {
        emailInputElement.onblur = function () {
            if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(emailInputElement.value)) {
                emailInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
                validation = true;
            } else {
                emailInputElement.style = "border: solid 2px red; border-radius: 5px";
                alertEmail.appendChild(alertMessageEmail);
                validation = false;
            }
        };
        emailInputElement.onfocus = function () {
            emailInputElement.style = "border-color: none";
            alertEmail.removeChild(alertMessageEmail);
        };
    };
    emailValidation();

    /* Password validation */
    var passwordInputElement = document.getElementById("password");
    var alertPassword = document.getElementById("alert-password");
    var alertMessagePassword = document.createTextNode("Insert a valid password format.");

    function passwordValidation() {
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
                validation = true;
            } else {
                passwordInputElement.style = "border: solid 2px red; border-radius: 5px";
                alertPassword.appendChild(alertMessagePassword);
                validation = false;
            }
        };
        passwordInputElement.onfocus = function () {
            passwordInputElement.style = "border-color: none";
            alertPassword.removeChild(alertMessagePassword);
        };
    };
    passwordValidation();

    /* Agree event */
    var agreeLogin = document.getElementById("agreelogin");
    var emailCorrectText = "Email is correct: ";
    var passwordCorrectText = "Password is correct: ";
    var emailIncorrectText = "Email is incorrect: ";
    var passwordIncorrectText = "Password is incorrect: ";

    function infoAgree() {
        if (validation === true) {
            alert(
                emailCorrectText + emailInputElement.value + "\n" +
                passwordCorrectText + passwordInputElement.value
            );
        } else {
            alert(
                emailIncorrectText + emailInputElement.value + "\n" +
                passwordIncorrectText + passwordInputElement.value
            );
        }
    }
    agreeLogin.onclick = function (e) {
        e.preventDefault();
        infoAgree();
    }
});




