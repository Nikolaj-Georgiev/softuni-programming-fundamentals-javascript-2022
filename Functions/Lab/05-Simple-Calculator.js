function simpleCalculator(numOne, numTwo, operator) {
    let result = 0;
    let multiply = (numOne, numTwo) => numOne * numTwo;
    let divide = (numOne, numTwo) => numOne / numTwo;
    let add = (numOne, numTwo) => numOne + numTwo;
    let subtract = (numOne, numTwo) => numOne - numTwo;

    switch (operator) {
        case 'multiply':
            result = multiply(numOne, numTwo);
            break;
        case 'divide':
            result = divide(numOne, numTwo);
            break;
        case 'add':
            result = add(numOne, numTwo);
            break;
        case 'subtract':
            result = subtract(numOne, numTwo);
            break;
    }
    return result;

}
console.log(simpleCalculator(5, 5, 'multiply'));
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract');