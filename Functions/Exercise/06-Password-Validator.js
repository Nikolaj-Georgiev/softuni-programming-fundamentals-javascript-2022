function passwordValidator(string) {

    // The length should be 6 - 10 characters (inclusive) - done
    // It should consist only of letters and digits - done
    // It should have at least 2 digits - done

    let stringLength = string.length;

    let isValidLength = (stringLength >= 6 && stringLength <= 10);
    let isSmallLetter = false;
    let isCapitalLetter = false;
    let isDigit = false;
    let digitCount = 0;

    for (let i = 0; i < stringLength; i++) {
        let current = string.charCodeAt(i);
        if (current >= 65 && current <= 90) {
            isSmallLetter = true;
        }
    }

    for (let i = 0; i < stringLength; i++) {
        let current = string.charCodeAt(i);
        if (current >= 97 && current <= 122) {
            isCapitalLetter = true;
        }
    }

    for (let i = 0; i < stringLength; i++) {
        let current = string.charCodeAt(i);
        if (current >= 48 && current <= 57) {
            isDigit = true;
            digitCount++;
        }
    }

    if (isValidLength && isCapitalLetter && isSmallLetter && isDigit && digitCount >= 2) {
        console.log('Password is valid');
    }

    if (!isValidLength) {
        console.log('Password must be between 6 and 10 characters');
    }

    if (!isSmallLetter && !isCapitalLetter && !isDigit) {
        console.log('Password must consist only of letters and digits');
    }

    if (digitCount < 2) {
        console.log('Password must have at least 2 digits');
    }


}
passwordValidator('Pa$s$s');