document.addEventListener("DOMContentLoaded", function (event) {

    /* Email validation */
    var emailInputElement = document.getElementById("email");

    emailInputElement.onblur = function () {
        if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(emailInputElement.value)) {
            emailInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validation++;
        } else {
            emailInputElement.style = "border: solid 2px red; border-radius: 5px";
            /* Agregar mensaje de error en este espacio*/
        }
    }
    emailInputElement.onfocus = function () {
        emailInputElement.style = "border-color: none";
    }

        /* Password validation */
        var passwordInputElement = document.getElementById("password");

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
            if (password.value.length > 8 && numberSum == true && letterSum == true) {
                password.style = "border: solid 2px  #48e525; border-radius: 5px";
                validation++;
            } else {
                password.style = "border: solid 2px red; border-radius: 5px";
                /* Agregar mensaje de error en este espacio*/
            }
        }
        passwordInputElement.onfocus = function () {
            passwordInputElement.style = "border-color: none";
        }
});


