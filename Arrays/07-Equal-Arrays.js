function equalArrays(firstArray, secondArray) {

    let sum = 0;
    let index = 0;


    for (let i = 0; i < firstArray.length; i++) {
        index = i;
        if (firstArray[i] == secondArray[i]) {
            sum += Number(firstArray[i]);
            if (i == firstArray.length - 1) {
                let positiveResult = `Arrays are identical. Sum: ${sum}`;
                console.log(positiveResult);
            }
        } else {
            let negativeResult = `Arrays are not identical. Found difference at ${index} index`;
            console.log(negativeResult);
            break;
        }
    }
}
equalArrays(['10', '20', '30'], ['10', '20', '30']);