function reverseString(string) {

    let resultString = '';

    for (let i = string.length - 1; i >= 0; i--) {
        resultString += string[i];
    }
    console.log(resultString);
}
reverseString('SoftUni');