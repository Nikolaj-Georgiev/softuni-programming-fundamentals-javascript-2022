function equalNeighbors(matrixOfStringArr) {

    let neighbors = 0;

    for (let i = 0; i < matrixOfStringArr.length; i++) {
        let firstArr = matrixOfStringArr[i];
        let secondArr = matrixOfStringArr[i + 1];
        for (let k = 0; k < firstArr.length - 1; k++) {
            let firstElement = firstArr[k];
            let secondElement = firstArr[k + 1];
            if (firstElement === secondElement) {
                neighbors++;
            }
        }
        if (i === matrixOfStringArr.length - 1) {
            continue;
        }
        for (let m = 0; m < secondArr.length; m++) {
            let firstElement1 = firstArr[m];
            let secondElement1 = secondArr[m];
            if (firstElement1 === secondElement1) {
                neighbors++;
            }
        }
    }
    console.log(neighbors);
}

equalNeighbors([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]);
console.log('-------------');
equalNeighbors([
    ['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2']
]);