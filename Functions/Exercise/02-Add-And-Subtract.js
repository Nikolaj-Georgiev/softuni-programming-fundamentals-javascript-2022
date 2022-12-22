function addAndSubtract(firstInt, secondInt, thirdInt) {

    let sum = (firstInt, secondInt) => firstInt + secondInt;
    let subtract = (sumOfFirstTwo, third) => sumOfFirstTwo - third;

    return subtract(sum(firstInt, secondInt), thirdInt);

}
console.log(addAndSubtract(23, 6, 10));