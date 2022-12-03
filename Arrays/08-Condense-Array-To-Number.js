function condenseArrayToNumber(numbers) {

    if (numbers.length > 1) {
        for (let i = 0; i < numbers.length; i++) {
            let condensedNumbers = [];
            for (let j = 0; j < numbers.length - 1; j++) {
                condensedNumbers[j] = numbers[j] + numbers[j + 1];
            }
            if (numbers.length === 1) {
                break;
            } else {
                numbers = condensedNumbers;
            }
            i--;
        }

        console.log(numbers.toString());
    } else {
        console.log(numbers.toString());
    }
}
condenseArrayToNumber([0, 23]);