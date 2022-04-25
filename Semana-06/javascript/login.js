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
        // if de comprobación del match
    }

    emailInputElement.addEventListener("blur", checkEmail);

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
        return passwordInputElement.value.length >= 8 && letterSum > 0
            && numberSum > 0;
    }

    function checkPassword(e) {
        console.log(isValidPassword());
        // if comprobación del password
    }

    passwordInputElement.addEventListener("blur", checkPassword);
});


