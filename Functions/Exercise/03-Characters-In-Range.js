function charsInRange(first, second) {

    let startChar = Math.min(first.charCodeAt(0), second.charCodeAt(0));
    let endChar = Math.max(first.charCodeAt(0), second.charCodeAt(0));
    let resultString = '';

    for (let i = startChar + 1; i < endChar; i++) {
        resultString += String.fromCharCode(i);
    }

    return resultString.split('').join(' ');
}
console.log(charsInRange('a', 'd'));