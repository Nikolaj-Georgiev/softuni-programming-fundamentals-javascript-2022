function integerAndFloat(firstNumber, secondNumber, thirdNumber) {

    let sumOfNumbers = firstNumber + secondNumber + thirdNumber;
    // let isInteger = sumOfNumbers % 1 === 0;
    // console.log(isInteger ? 'Integer' : 'Float');

    let isInteger2 = sumOfNumbers === Math.trunc(sumOfNumbers);
    console.log(`${sumOfNumbers} - ${isInteger2 ? 'Integer' : 'Float'}`);

}
integerAndFloat(9, 100, 1.1);