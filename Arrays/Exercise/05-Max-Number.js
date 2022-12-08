function maxNumber(array) {

    let resultArray = [];

    for (let i = 0; i < array.length; i++) {
        let isBigger = true;
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] <= array[j]) {
                isBigger = false;
            }
        }

        if (isBigger) {
            resultArray[resultArray.length] = array[i];
        }

    }
    console.log(resultArray.join(' '));
}
maxNumber([41, 41, 34, 20]);