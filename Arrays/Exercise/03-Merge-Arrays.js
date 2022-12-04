function mergeArrays(firstArray, secondArray) {

    let resultArray = [];

    for (let i = 0; i < firstArray.length; i++) {
        if (i % 2 === 0) {
            resultArray.push(Number(firstArray[i]) + Number(secondArray[i]));
        } else {
            resultArray.push(firstArray[i] + secondArray[i]);
        }
    }
    console.log(resultArray.join(' - '));
}
mergeArrays(
    ['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);

function mergeArrays1(fArr, sArr) {

    let rArr = [];
    let resultString = '';

    for (let i = 0; i < fArr.length; i++) {
        if (i < fArr.length - 1) {
            if (i % 2 === 0) {
                rArr[i] = Number(fArr[i]) + Number(sArr[i]);
                resultString += `${rArr[i]} - `;
            } else {
                rArr[i] = fArr[i] + sArr[i];
                resultString += `${rArr[i]} - `;
            }

        } else {
            if (i % 2 === 0) {
                rArr[i] = Number(fArr[i]) + Number(sArr[i]);
                resultString += `${rArr[i]}`;
            } else {
                rArr[i] = fArr[i] + sArr[i];
                resultString += `${rArr[i]}`;
            }

        }
    }
    console.log(resultString);
}
mergeArrays1(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);