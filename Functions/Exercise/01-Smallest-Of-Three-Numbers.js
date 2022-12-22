function getSmallestOfThree(firstNumber, secondNumber, thirdNumber) {

    let workArray = [Number(firstNumber), Number(secondNumber), Number(thirdNumber)];
    let smallestNumber = Math.min(...workArray);
    return smallestNumber;

}
console.log(getSmallestOfThree(2, 5, 3));

function getSmallest1(first, second, third) {

    let workArr = [+first, +second, +third];
    return Math.min(...workArr);

}
console.log(getSmallest1(600, 342, 123));