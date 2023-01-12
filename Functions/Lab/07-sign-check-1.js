function signCheck1(firstNumber, secondNumber, thirdNumber) {
    let checker = (firstNumber, secondNumber) => {
        if (firstNumber > 0 && secondNumber > 0) {
            return 'Positive';
        } else if (firstNumber < 0 && secondNumber < 0) {
            return 'Positive';
        } else {
            return 'Negative';
        }
    }

    let checkerResult = checker(firstNumber, secondNumber);

    if (checkerResult == 'Positive' && thirdNumber > 0) {
        console.log('Positive');
    } else if (checkerResult == 'Negative' && thirdNumber < 0) {
        console.log('Positive')
    } else {
        console.log('Negative');
    }
}
signCheck1(5, 12, -15)
signCheck1(-6, -12, 14)
signCheck1(-1, -2, -3)
signCheck1(-5, 1, 1)