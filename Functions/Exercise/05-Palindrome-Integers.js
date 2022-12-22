function palindromeChecker(inputArr) {

    let arrElementAsString = '';
    let finalResult = '';

    for (let el of inputArr) {
        arrElementAsString = String(el);
        let reversedString = arrElementAsString.split('').reverse().join('');

        let result = (arrElementAsString === reversedString) ? true : false;
        // console.log(result);
        finalResult += `${result}\n`;
    }

    return finalResult;
}
console.log(palindromeChecker([32, 2, 232, 1010]));