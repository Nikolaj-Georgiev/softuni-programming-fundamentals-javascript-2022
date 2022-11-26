function biggestOf3Numbers(firstNumber, secondNumber, thirdNumber) {

    let arrOfNumbers = [firstNumber, secondNumber, thirdNumber];
    let maxNum = Math.max(...arrOfNumbers);

    console.log(maxNum);
}
biggestOf3Numbers(-2, -2, -3);

function biggestOf3Numbers2(num1, num2, num3) {

    let theBiggestNumber = 0;

    if (num1 > num2) {
        theBiggestNumber = num1;
    } else {
        theBiggestNumber = num2;
    }
    if (theBiggestNumber < num3) {
        theBiggestNumber = num3;
    }

    console.log(theBiggestNumber);
}
biggestOf3Numbers2(-2, -2, -3);