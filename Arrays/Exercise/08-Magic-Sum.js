function magicSum(array, magicNumber) {

    for (let i = 0; i < array.length; i++) {

        let firstNumber = array[i];
        for (let j = i + 1; j < array.length; j++) {
            let secondNumber = array[j];
            let magicSum = firstNumber + secondNumber;

            if (magicSum === magicNumber) {

                console.log(firstNumber + ' ' + secondNumber);
            }

        }

    }

}
magicSum([1, 3, 8, 4, 5, 6],
    6
);

function magicSum1(array1, magicNumber1) {

    for (let i = 0; i < array1.length; i++) {
        let resultArray1 = [];
        let firstNumber1 = array1[i];
        for (let j = i + 1; j < array1.length; j++) {
            let resultArray1 = [];
            let secondNumber1 = array1[j];
            let magicSum = firstNumber1 + secondNumber1;

            if (magicSum === magicNumber1) {
                resultArray1.push(firstNumber1);
                resultArray1.push(secondNumber1);
                console.log(resultArray1.join(' '));
            }

        }

    }

}
magicSum1([1, 3, 8, 4, 5, 6],
    6
);