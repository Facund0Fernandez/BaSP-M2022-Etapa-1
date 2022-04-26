document.addEventListener("DOMContentLoaded", function (event) {

    var validation = 0;

    /* Name validation */
    var nameInputElement = document.getElementById("fname");
    var alertName = document.getElementById("alert-fname");
    var alertMessageName = document.createTextNode("Insert a valid name format.");

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
            alertName.appendChild(alertMessageName);
        }
    }
    nameInputElement.onfocus = function () {
        nameInputElement.style = "border-color: none";
        alertName.removeChild(alertMessageName);
    }

    /* Surname validation */
    var surnameInputElement = document.getElementById("surname");
    var alertSurname = document.getElementById("alert-surname");
    var alertMessageSurname = document.createTextNode("Insert a valid surname format.")

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
            alertSurname.appendChild(alertMessageSurname);
        }
    }
    surnameInputElement.onfocus = function () {
        surnameInputElement.style = "border-color: none";
        alertSurname.removeChild(alertMessageSurname);
    }

    /* DNI validation */
    var dniInputElement = document.getElementById("dni");
    var alertDNI = document.getElementById("alert-dni");
    var alertMessageDNI = document.createTextNode("Insert a valid DNI format.")

    dniInputElement.onblur = function () {
        if (dniInputElement.value.length > 7 && isNaN(dniInputElement.value) == false) {
            dniInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validation++;
        } else {
            dniInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertDNI.appendChild(alertMessageDNI);
        }
    }
    dniInputElement.onfocus = function () {
        dniInputElement.style = "border-color: none";
        alertDNI.removeChild(alertMessageDNI);
    }

    /* Date validation */
    var dateInputElement = document.getElementById("date");
    var alertDate = document.getElementById("alert-date");
    var alertMessageDate = document.createTextNode("Insert a valid date format.")

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
            alertDate.appendChild(alertMessageDate);
        }
    }
    dateInputElement.onfocus = function () {
        dateInputElement.style = "border-color: none";
        alertDate.removeChild(alertMessageDate);
    }

    /* Phone validation */
    var phoneInputElement = document.getElementById("phone");
    var alertPhone = document.getElementById("alert-phone");
    var alertMessagePhone = document.createTextNode("Insert a valid phone format.")

    phoneInputElement.onblur = function () {
        if (phoneInputElement.value.length == 10 && isNaN(phoneInputElement.value) == false) {
            phoneInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validation++;
        } else {
            phoneInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertPhone.appendChild(alertMessagePhone);
        }
    }
    phoneInputElement.onfocus = function () {
        phoneInputElement.style = "border-color: none";
        alertPhone.removeChild(alertMessagePhone);
    }

    /* Address validation */
    var addressInputElement = document.getElementById("address");
    var alertAddress = document.getElementById("alert-address");
    var alertMessageAddress = document.createTextNode("Insert a valid address format.")

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
            alertAddress.appendChild(alertMessageAddress);
        }
    }
    addressInputElement.onfocus = function () {
        addressInputElement.style = "border-color: none";
        alertAddress.removeChild(alertMessageAddress);
    }

    /* Location validation */
    var locationInputElement = document.getElementById("town");
    var alertLocation = document.getElementById("alert-town");
    var alertMessageLocation = document.createTextNode("Insert a valid town format.")

    locationInputElement.onblur = function () {
        if (locationInputElement.value.length > 3) {
            locationInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validation++;
        } else {
            locationInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertLocation.appendChild(alertMessageLocation);
        }
    }
    locationInputElement.onfocus = function () {
        locationInputElement.style = "border-color: none";
        alertLocation.removeChild(alertMessageLocation);
    }

    /* Postal code validation */
    var codeInputElement = document.getElementById("pcode");
    var alertCode = document.getElementById("alert-pcode");
    var alertMessageCode = document.createTextNode("Insert a valid postal code format.")

    codeInputElement.onblur = function () {
        if (codeInputElement.value.length >= 4 && codeInputElement.value.length <= 5 && isNaN(codeInputElement.value) == false) {
            codeInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validation++;
        } else {
            codeInputElement.style = "border: solid 2px red; border-radius: 5px";
            /* Agregar mensaje de error en este espacio*/
            alertCode.appendChild(alertMessageCode);
        }
    }
    codeInputElement.onfocus = function () {
        codeInputElement.style = "border-color: none";
        alertCode.removeChild(alertMessageCode);
    }

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
        if (password.value.length > 8 && numberSum == true && letterSum == true) {
            password.style = "border: solid 2px  #48e525; border-radius: 5px";
            validation++;
        } else {
            password.style = "border: solid 2px red; border-radius: 5px";
            alertPassword.appendChild(alertMessagePassword);
        }
    }
    passwordInputElement.onfocus = function () {
        passwordInputElement.style = "border-color: none";
        alertPassword.removeChild(alertMessagePassword);
    }

    /* Repeat password validation */
    var repPasswordInputElement = document.getElementById("reppassword");
    var alertRepPassword = document.getElementById("alert-reppassword");
    var alertMessageRepPassword = document.createTextNode("Insert a valid password format.");

    repPasswordInputElement.onblur = function () {
        if (passwordInputElement.value == repPasswordInputElement.value) {
            repPasswordInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validation++;
        } else {
            repPasswordInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertRepPassword.appendChild(alertMessageRepPassword);
        }
    }
    repPasswordInputElement.onfocus = function () {
        repPasswordInputElement.style = "border-color: none";
        alertRepPassword.removeChild(alertMessageRepPassword);
    }




});