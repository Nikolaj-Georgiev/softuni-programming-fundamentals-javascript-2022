function evenOddSubtraction(arrayOfNumbers) {

    let sumOfEven = 0;
    let sumOfOdd = 0;
    let result = 0;

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        let number = arrayOfNumbers[i];
        if (number % 2 == 0) {
            sumOfEven += number;
        } else {
            sumOfOdd += number;
        }
    }

    result = sumOfEven - sumOfOdd;

    console.log(result);

}
evenOddSubtraction([3, 5, 7, 9]);

function evenOddSubtraction1(arrayOfNumbers1) {

    let result1 = 0;

    for (let i = 0; i < arrayOfNumbers1.length; i++) {
        let number1 = arrayOfNumbers1[i];

        if (number1 % 2 == 0) {
            result1 += number1;
        } else {
            result1 -= number1;
        }
    }
    console.log(result1);
}
evenOddSubtraction1([3, 5, 7, 9]);