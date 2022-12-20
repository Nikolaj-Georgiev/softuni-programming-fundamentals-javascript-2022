function repeatString(string, repeatCount) {

    let result = '';
    for (let i = 0; i < repeatCount; i++) {
        result += string;
    }
    return result;

}
console.log(repeatString("abc", 3));
console.log(repeatString("String", 2));