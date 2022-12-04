function arrayRotation(array, rotations) {

    let rot = rotations % array.length;
    let resultArray = [];
    let resultToString = '';

    for (let i = 0; i < rot; i++) {
        let positionHolder = array[i];
        for (let j = 0; j < array.length; j++) {
            if (i == 0) {
                resultArray[j] = array[j + 1];
            } else {
                resultArray[j] = resultArray[j + 1];
            }
        }
        resultArray[resultArray.length - 1] = positionHolder;
    }
    if (rot == 0) {
        resultArray = array;
    }

    for (let k = 0; k < resultArray.length; k++) {
        if (k < resultArray.length - 1) {
            resultToString += `${resultArray[k]} `;
        } else {
            resultToString += `${resultArray[k]}`;
        }
    }
    console.log(resultToString);
}
arrayRotation([32, 21, 61, 1], 4);

function arrRotMethods(arrToRotate, rotations) {

    let rotationOptimizer = rotations % arrToRotate.length;

    for (let i = 0; i < rotationOptimizer; i++) {
        let placeHolder = arrToRotate.shift();

        arrToRotate.push(placeHolder);
    }
    console.log(arrToRotate.join(' '));

}
arrRotMethods([51, 47, 32, 61, 21], 2);