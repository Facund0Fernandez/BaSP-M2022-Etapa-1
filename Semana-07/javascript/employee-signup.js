document.addEventListener("DOMContentLoaded", function (event) {

    var validation;

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
            validation = true;
        } else {
            nameInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertName.appendChild(alertMessageName);
            validation = false;
        }
    }
    nameInputElement.onfocus = function () {
        nameInputElement.style = "border-color: none";
        alertName.appendChild(alertMessageName);
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
            validation = true;
        } else {
            surnameInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertSurname.appendChild(alertMessageSurname);
            validation = false;
        }
    }
    surnameInputElement.onfocus = function () {
        surnameInputElement.style = "border-color: none";
        alertSurname.appendChild(alertMessageSurname);
        alertSurname.removeChild(alertMessageSurname);
    }

    /* DNI validation */
    var dniInputElement = document.getElementById("dni");
    var alertDNI = document.getElementById("alert-dni");
    var alertMessageDNI = document.createTextNode("Insert a valid DNI format.")

    dniInputElement.onblur = function () {
        if (dniInputElement.value.length > 7 && isNaN(dniInputElement.value) == false) {
            dniInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validation = true;
        } else {
            dniInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertDNI.appendChild(alertMessageDNI);
            validation = false;
        }
    }
    dniInputElement.onfocus = function () {
        dniInputElement.style = "border-color: none";
        alertDNI.appendChild(alertMessageDNI);
        alertDNI.removeChild(alertMessageDNI);
    }

    /* Date validation */
    var dateInputElement = document.getElementById("date");
    var alertDate = document.getElementById("alert-date");
    var alertMessageDate = document.createTextNode("Insert a valid date format.")

    dateInputElement.onblur = function () {
        var date = dateInputElement.value.replace(/[/]/g, '');
        var slash = 0;
        for (var i = 0; i < dateInputElement.value.length; i++) {
            if (dateInputElement.value[i] == '/') {
                slash++;
            }
        }
        if (slash == 2 && isNaN(date) == false) {
            dateInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validation = true;
        } else {
            dateInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertDate.appendChild(alertMessageDate);
            validation = false;
        }
    }
    dateInputElement.onfocus = function () {
        dateInputElement.style = "border-color: none";
        alertDate.appendChild(alertMessageDate);
        alertDate.removeChild(alertMessageDate);
    }

    /* Phone validation */
    var phoneInputElement = document.getElementById("phone");
    var alertPhone = document.getElementById("alert-phone");
    var alertMessagePhone = document.createTextNode("Insert a valid phone format.")

    phoneInputElement.onblur = function () {
        if (phoneInputElement.value.length == 10 && isNaN(phoneInputElement.value) == false) {
            phoneInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validation = true;
        } else {
            phoneInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertPhone.appendChild(alertMessagePhone);
            validation = false;
        }
    }
    phoneInputElement.onfocus = function () {
        phoneInputElement.style = "border-color: none";
        alertPhone.appendChild(alertMessagePhone);
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
            validation = true;
        } else {
            addressInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertAddress.appendChild(alertMessageAddress);
            validation = false;
        }
    }
    addressInputElement.onfocus = function () {
        addressInputElement.style = "border-color: none";
        alertAddress.appendChild(alertMessageAddress);
        alertAddress.removeChild(alertMessageAddress);
    }

    /* Location validation */
    var locationInputElement = document.getElementById("town");
    var alertLocation = document.getElementById("alert-town");
    var alertMessageLocation = document.createTextNode("Insert a valid town format.")

    locationInputElement.onblur = function () {
        if (locationInputElement.value.length > 3) {
            locationInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validation = true;
        } else {
            locationInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertLocation.appendChild(alertMessageLocation);
            validation = false;
        }
    }
    locationInputElement.onfocus = function () {
        locationInputElement.style = "border-color: none";
        alertLocation.appendChild(alertMessageLocation);
        alertLocation.removeChild(alertMessageLocation);
    }

    /* Postal code validation */
    var codeInputElement = document.getElementById("pcode");
    var alertCode = document.getElementById("alert-pcode");
    var alertMessageCode = document.createTextNode("Insert a valid postal code format.")

    codeInputElement.onblur = function () {
        if (codeInputElement.value.length >= 4 && codeInputElement.value.length <= 5 && isNaN(codeInputElement.value) == false) {
            codeInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validation = true;
        } else {
            codeInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertCode.appendChild(alertMessageCode);
            validation = false;
        }
    }
    codeInputElement.onfocus = function () {
        codeInputElement.style = "border-color: none";
        alertCode.appendChild(alertMessageCode);
        alertCode.removeChild(alertMessageCode);
    }

    /* Email validation */
    var emailInputElement = document.getElementById("email");
    var alertEmail = document.getElementById("alert-email");
    var alertMessageEmail = document.createTextNode("Insert a valid email format.");
    var validationEmail;

    emailInputElement.onblur = function () {
        if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(emailInputElement.value)) {
            emailInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validationEmail = true;
        } else {
            emailInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertEmail.appendChild(alertMessageEmail);
            validationEmail = false;
        }
    }
    emailInputElement.onfocus = function () {
        emailInputElement.style = "border-color: none";
        alertEmail.appendChild(alertMessageEmail);
        alertEmail.removeChild(alertMessageEmail);
    }

    /* Password validation */
    var passwordInputElement = document.getElementById("password");
    var alertPassword = document.getElementById("alert-password");
    var alertMessagePassword = document.createTextNode("Insert a valid password format.");
    var validationPassword;

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
            validationPassword = true;
        } else {
            passwordInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertPassword.appendChild(alertMessagePassword);
            validationPassword = false;
        }
    }
    passwordInputElement.onfocus = function () {
        passwordInputElement.style = "border-color: none";
        alertPassword.appendChild(alertMessagePassword);
        alertPassword.removeChild(alertMessagePassword);
    }

    /* Repeat password validation */
    var repPasswordInputElement = document.getElementById("reppassword");
    var alertRepPassword = document.getElementById("alert-reppassword");
    var alertMessageRepPassword = document.createTextNode("Insert a valid password format.");

    repPasswordInputElement.onblur = function () {
        if (passwordInputElement.value == repPasswordInputElement.value) {
            repPasswordInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validation = true;
        } else {
            repPasswordInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertRepPassword.appendChild(alertMessageRepPassword);
            validation = false;
        }
    }
    repPasswordInputElement.onfocus = function () {
        repPasswordInputElement.style = "border-color: none";
        alertRepPassword.appendChild(alertMessageRepPassword);
        alertRepPassword.removeChild(alertMessageRepPassword);
    }

    /* Agree event */
    var agreeSignup = document.getElementById("agreesignup");
    var emailCorrectText = "Email is correct: ";
    var passwordCorrectText = "Password is correct: ";
    var IncorrectText = "Error. Please, verify your information: ";

    function infoAgree() {
        if (validationEmail === true && validationPassword === true) {
            alert(
                emailCorrectText + emailInputElement.value + "\n" +
                passwordCorrectText + passwordInputElement.value
            );
        } else {
            alert(
                IncorrectText + "\n" +
                "Email: " + emailInputElement.value + "\n" +
                "Password: " + passwordInputElement.value
            );
        }
    }
    agreeSignup.onclick = function (e) {
        e.preventDefault();
        infoAgree();
    }
});