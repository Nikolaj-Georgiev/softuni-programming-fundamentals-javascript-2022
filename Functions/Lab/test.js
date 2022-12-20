let testche = function(arg) {
    console.log('balkan\n'.repeat(arg));
}
testche(5);

let printText = function(text) {
    console.log(text);
}
printText('Pesho');
matrix(4, 4);

function matrix(rolls, columns) {
    let matrixArray = [];

    for (let i = 0; i < columns; i++) {
        matrixArray.push([]);
    }

    let counter = 1;
    let startRoll = 0;
    let startColumn = 0;
    let endRoll = rolls - 1;
    let endColumn = columns - 1;

    while (startRoll <= endRoll && startColumn <= endColumn) {

        for (let i = startColumn; i <= endColumn; i++) {
            matrixArray[startRoll][i] = counter;
            counter++;
        }
        startRoll++;
        for (let i = startRoll; i <= endRoll; i++) {
            matrixArray[i][endColumn] = counter;
            counter++;
        }
        endColumn--;
        for (let i = endColumn; i >= startColumn; i--) {
            matrixArray[endRoll][i] = counter;
            counter++;
        }
        endRoll--;
        for (let i = endRoll; i >= startRoll; i--) {
            matrixArray[i][startColumn] = counter;
            counter++;
        }
        startColumn++;

    }
    for (let i = 0; i < matrixArray.length; i++) {
        console.log(matrixArray[i].join(' '));
    }
}