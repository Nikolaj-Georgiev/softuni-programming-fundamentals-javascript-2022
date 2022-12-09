function nonDecreasingSubset(inputArray) {

    let workArray = [];
    for (const iterator of inputArray) {
        workArray.push(iterator);
    }

    let biggestNumber = Number.MIN_SAFE_INTEGER;
    let tempArray = [];
    for (const iterator of workArray) {
        if (iterator >= biggestNumber) {
            biggestNumber = iterator;
            tempArray.push(biggestNumber);
        }

    }
    workArray = tempArray;
    console.log(workArray.join(' '));
}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([1, 2, 3, 4]);
nonDecreasingSubset([-10, 1, 1, 11]);