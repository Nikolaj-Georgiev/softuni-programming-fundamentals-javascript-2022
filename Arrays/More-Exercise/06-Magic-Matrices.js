function magicMatrices(inputArray) {

    let workArray = [];
    for (let iterator of inputArray) {
        workArray.push(iterator);
    }
    let isMagic = true;
    let rollsSum = 0;
    let columnsSum = 0;
    let workArrayLength = workArray.length;

    if (workArrayLength >= 3) {
        for (let i = 0; i < workArrayLength; i++) {
            let tempRollSum = 0;
            let tempColumnsSum = 0;
            for (let iterator of workArray[i]) {
                tempRollSum += iterator;
            }
            if (rollsSum === tempRollSum || rollsSum === 0) {
                rollsSum = tempRollSum;
            } else {
                isMagic = false;
            }
            for (let j = 0; j < workArrayLength; j++) {
                tempColumnsSum += Number(workArray[j][i]);

            }

            if (columnsSum === tempColumnsSum || columnsSum === 0) {
                columnsSum = tempColumnsSum;
            } else {
                isMagic = false;
            }

        }
    } else {
        isMagic = false;
    }
    if (rollsSum !== columnsSum) {
        isMagic = false
    }

    console.log(isMagic);
}
magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);
magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]);
magicMatrices([
    [0, 2, 2, 0],
    [2, 0, 1, 1],
    [1, 1, 0, 2],
    [1, 1, 1, 1],
]);