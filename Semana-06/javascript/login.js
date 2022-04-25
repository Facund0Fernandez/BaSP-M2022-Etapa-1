document.addEventListener("DOMContentLoaded", function (event) {

    console.log('funciona');

    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    const emailInputElement = document.getElementById("email");
    console.log(emailInputElement);
    const passwordInputElement = document.getElementById("password");
    console.log(passwordInputElement);

    function checkEmail(e) {
        console.log(e, "valor del evento");
        const currentEmailValue = e.target.value;
        const match = emailRegex.test(currentEmailValue);
        console.log(match);
        if (!match) {
            console.log('error');
            emailInputElement.style = "border: solid 2px red; border-radius: 5px";
            var alertEmailContainer = document.createElement("p");
            var alertEmailMessage = document.createTextNode("Insert a valid format email.")
            alertEmailContainer.appendChild(alertEmailMessage);
            var emailSpan = document.getElementById("alert-email");
            emailSpan.appendChild(alertEmailContainer);
        } else {
            emailInputElement.style = "border: solid 2px #48e525; border-radius: 5px";
        }
    }
    emailInputElement.addEventListener("blur", checkEmail);

   function emailOnFocus () {
        emailInputElement.style = "border-color: none";
        emailSpan.removeChild(alertEmailContainer);
    }
    emailInputElement.addEventListener("focus", emailOnFocus);


    function isValidPassword() {
        var letterSum = 0;
        var numberSum = 0;
        for (i = 0; i < passwordInputElement.value.length; i++) {
            if (isNaN(passwordInputElement.value[i])) {
                letterSum += 1;
            } else {
                numberSum += 1;
            }
        }
        return passwordInputElement.value.length >= 8 && letterSum > 0 && numberSum > 0;
    }

    function checkPassword(e) {
        console.log(isValidPassword());
        if (!isValidPassword()) {
            console.log('error');
            passwordInputElement.style = "border: solid 2px red; border-radius: 5px";
            var passwordSpan = document.getElementById("alert-password");
            var alertPasswordMessage = document.createTextNode("Insert a valid format password.");
            passwordSpan.appendChild(alertPasswordMessage);
        } else {
            passwordInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
        }
    }
    passwordInputElement.addEventListener("blur", checkPassword);

    function passwordOnFocus () {
        passwordInputElement.style = "border-color: none";
        passwordSpan.removeChild(alertPasswordMessage);
    }
    passwordInputElement.addEventListener("focus", passwordOnFocus);
});


