document.addEventListener("DOMContentLoaded", function (event) {

    var validation = 0;

    /* Name validation */
    var nameInputElement = document.getElementById("fname");

    nameInputElement.onblur = function () {
        var numberSum = false;
        for (var i = 0; i < nameInputElement.value.length; i++) {
            if (isNaN(nameInputElement.value[i]) == false) {
                numberSum = true;
            }
        }
        if (nameInputElement.value.length > 3 && numberSum == false) {
            nameInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validation++;
        } else {
            nameInputElement.style = "border: solid 2px red; border-radius: 5px";
            /* Agregar mensaje de error en este espacio*/
        }
    }
    nameInputElement.onfocus = function () {
        nameInputElement.style = "border-color: none";
    }

    /* Surname validation */
    var surnameInputElement = document.getElementById("surname");

    surnameInputElement.onblur = function () {
        var numberSum = false;
        for (var i = 0; i < surnameInputElement.value.length; i++) {
            if (isNaN(surnameInputElement.value[i]) == false) {
                numberSum = true;
            }
        }
        if (surnameInputElement.value.length > 3 && numberSum == false) {
            surnameInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validation++;
        } else {
            surnameInputElement.style = "border: solid 2px red; border-radius: 5px";
            /* Agregar mensaje de error en este espacio*/
        }
    }
    surnameInputElement.onfocus = function () {
        surnameInputElement.style = "border-color: none";
    }

    /* DNI validation */
    var dniInputElement = document.getElementById("dni");

    dniInputElement.onblur = function () {
        if (dniInputElement.value.length > 7 && isNaN(dniInputElement.value) == false) {
            dniInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validation++;
        } else {
            dniInputElement.style = "border: solid 2px red; border-radius: 5px";
            /* Agregar mensaje de error en este espacio*/
        }
    }
    dniInputElement.onfocus = function () {
        dniInputElement.style = "border-color: none";
    }

    /* Date validation */
    var dateInputElement = document.getElementById("date");

    dateInputElement.onblur = function () {
        var day = dateInputElement.value.substring(0, 2);
        var month = dateInputElement.value.substring(2, 2);
        var year = dateInputElement.value.substring(4, 6);
        var date = dateInputElement.value.replace(/[/]/g, '');
        var slash = 0;
        for (var i = 0; i < dateInputElement.value.length; i++) {
            if (dateInputElement.value[i] == '/') {
                slash++;
            }
        }
        if (slash == 2 && isNaN(date) == false) {
            dateInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validation++;
        } else {
            dateInputElement.style = "border: solid 2px red; border-radius: 5px";
            /* Agregar mensaje de error en este espacio*/
        }
    }
    dateInputElement.onfocus = function () {
        dateInputElement.style = "border-color: none";
    }

    /* Phone validation */
    var phoneInputElement = document.getElementById("phone");

    phoneInputElement.onblur = function () {
        if (phoneInputElement.value.length == 10 && isNaN(phoneInputElement.value) == false) {
            phoneInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validation++;
        } else {
            phoneInputElement.style = "border: solid 2px red; border-radius: 5px";
            /* Agregar mensaje de error en este espacio*/
        }
    }
    phoneInputElement.onfocus = function () {
        phoneInputElement.style = "border-color: none";
    }

    /* Address validation */
    var addressInputElement = document.getElementById("address");

    addressInputElement.onblur = function () {
        var addressSpaces = addressInputElement.value.replaceAll(' ', '');
        var number = false;
        for (var i = 0; i < addressSpaces.length; i++) {
            if (isNaN(addressSpaces[i]) == false) {
                number = true;
            }
        }
        var letter = false;
        for (var i = 0; i < addressSpaces.length; i++) {
            if (isNaN(addressSpaces[i]) == true) {
                letter = true;
            }
        }
        if (addressInputElement.value.length > 5 && number == true && letter == true &&
            addressInputElement.value.indexOf(' ') > 0 &&
            addressInputElement.value.indexOf(' ') < addressInputElement.value.length - 1 &&
            addressInputElement.value.length > addressInputElement.value.lastIndexOf(' ')) {
            addressInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validation++;
        } else {
            addressInputElement.style = "border: solid 2px red; border-radius: 5px";
            /* Agregar mensaje de error en este espacio*/
        }
    }
    addressInputElement.onfocus = function () {
        addressInputElement.style = "border-color: none";
    }

    /* Location validation */
    var locationInputElement = document.getElementById("town");

    locationInputElement.onblur = function () {
        if (locationInputElement.value.length > 3) {
            locationInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validation++;
        } else {
            locationInputElement.style = "border: solid 2px red; border-radius: 5px";
            /* Agregar mensaje de error en este espacio*/
        }
    }
    locationInputElement.onfocus = function () {
        locationInputElement.style = "border-color: none";
    }

    /* Postal code validation */
    var codeInputElement = document.getElementById("pcode");

    codeInputElement.onblur = function () {
        if (codeInputElement.value.length >= 4 && codeInputElement.value.length <= 5 && isNaN(codeInputElement.value) == false) {
            codeInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validation++;
        } else {
            codeInputElement.style = "border: solid 2px red; border-radius: 5px";
            /* Agregar mensaje de error en este espacio*/
        }
    }
    codeInputElement.onfocus = function () {
        codeInputElement.style = "border-color: none";
    }

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

    /* Repeat password validation */
    var repPasswordInputElement = document.getElementById("reppassword");

    repPasswordInputElement.onblur = function () {
        if (passwordInputElement.value == repPasswordInputElement.value) {
            repPasswordInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validation++;
        } else {
            repPasswordInputElement.style = "border: solid 2px red; border-radius: 5px";
            /* Agregar mensaje de error en este espacio*/
        }
    }



});