function sumDigits(number) {

    let numberAsString = number.toString();
    let sumOfDigits = 0;

    for (let i = 0; i < numberAsString.length; i++) {
        let valueOfDigit = Number(numberAsString[i]);
        sumOfDigits += valueOfDigit;
    }
    console.log(sumOfDigits);
}
sumDigits(97561);