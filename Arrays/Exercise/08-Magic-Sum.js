function magicSum(array, magicNumber) {

    for (let i = 0; i < array.length; i++) {
        let resultArray = [];
        let firstNumber = array[i];
        for (let j = i + 1; j < array.length; j++) {
            let secondNumber = array[j];
            let magicSum = firstNumber + secondNumber;

            if (magicSum === magicNumber) {
                resultArray.push(firstNumber);
                resultArray.push(secondNumber);
                console.log(resultArray.join(' '));
            }

        }

    }

}
magicSum([1, 7, 6, 2, 19, 23], 8);