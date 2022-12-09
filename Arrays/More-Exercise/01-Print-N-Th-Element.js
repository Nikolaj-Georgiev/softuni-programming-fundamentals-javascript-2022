function printNthElement(inputArray) {

    let nNumber = Number(inputArray[inputArray.length - 1]);
    let tempArray = [];

    for (let el of inputArray) {
        tempArray.push(el);
    }

    let resultArray = [];
    let index = 0;

    do {
        resultArray.push(tempArray[index]);
        index += nNumber;
    } while (index < tempArray.length - 1);


    console.log(resultArray.join(' '));

}
printNthElement(['5', '20', '31', '4', '20', '2']);
printNthElement(['dsa', 'asd', 'test', 'test', '2']);
printNthElement(['1', '2', '3', '4', '5', '6']);