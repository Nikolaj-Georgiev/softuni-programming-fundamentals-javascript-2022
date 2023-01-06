function factorialDivision(firstNumber, secondNumber) {

    let factorial = function(number) {
        if (number == 0) {
            return 1;
        } else if (number == 1) {
            return 1;
        } else if (number == 2) {
            return 2;
        } else {
            let result = 1;
            for (i = 1; i <= number; i++) {
                result *= i;
            }
            return result;
        }
    }

    let firstFactorial = factorial(firstNumber);
    let secondFactorial = factorial(secondNumber);
    let resultingNumber = firstFactorial / secondFactorial;

    return resultingNumber.toFixed(2);

}
console.log(factorialDivision(5, 2));
console.log(factorialDivision(6, 2));