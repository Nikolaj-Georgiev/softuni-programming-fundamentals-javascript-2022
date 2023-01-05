function passValidator(string) {

    // The length should be 6 - 10 characters (inclusive)
    // It should consist only of letters and digits
    // It should have at least 2 digits 

    let stringLength = string.length;
    let digitCount = 0;
    let isValidLength = false;
    let isDigit = false;
    let isValidLetter = false;
    let isEnoughDigits = false;
    let flag = false;

    if (stringLength >= 6 && stringLength <= 10) {
        isValidLength = true;
    } else {
        console.log("Password must be between 6 and 10 characters");
    }

    for (let i = 0; i < stringLength; i++) {
        let currentSymbol = string.charCodeAt(i);

        if (currentSymbol >= 48 && currentSymbol <= 57) {
            digitCount++;
        }
    }

    for (let i = 0; i < stringLength; i++) {
        let currentSymbol = string.charCodeAt(i);
        if (!((currentSymbol >= 65 && currentSymbol <= 90) || (currentSymbol >= 97 && currentSymbol <= 122)) && !(currentSymbol >= 48 && currentSymbol <= 57)) {
            isValidLetter = false;
            isDigit = false;
            flag = true;
            break;
        } else if (currentSymbol >= 65 && currentSymbol <= 90 || currentSymbol >= 97 && currentSymbol <= 122) {
            isValidLetter = true;
        } else if (currentSymbol >= 48 && currentSymbol <= 57) {
            isDigit = true;
        }

        if (flag) {
            break;
        }
    }

    if (!isValidLetter && !isDigit) {
        console.log("Password must consist only of letters and digits");
    }

    if (digitCount >= 2) {
        isEnoughDigits = true;
    } else {
        console.log("Password must have at least 2 digits");
    }

    if (isEnoughDigits && isValidLength && isValidLetter) {
        console.log("Password is valid");
    }
}
passValidator('MyPass123');
passValidator('logIn');
passValidator('Pa$s$s');