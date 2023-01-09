function numberModification(number) {

    let numberString = String(number);
    let workArray = [];

    for (const iterator of numberString) {
        workArray.push(iterator);
    }

    let averageDivider = (workArray[0] === '-') ? workArray.length - 1 : workArray.length;

    let sumOfDigits = function(array) {
        let result = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] === '-') {
                result -= Number(array[i + 1]);
                i++;
            } else {
                result += Number(array[i]);
            }
        }
        return result;
    }

    function averageCheck(number) {
        if (number <= 5) {
            workArray.push(9);
            averageDivider += 1;
            sumOfDigits(workArray);
            if (number <= 5) {
                averageCheck(sumOfDigits(workArray) / averageDivider);
            }
            let result = workArray.join('');
            return result;
        } else {
            if (workArray[0] === '-') {
                workArray.shift();
                let result = workArray.join('');
                return result;
            } else {
                let result = workArray.join('');
                return result;
            }
        }
    }

    console.log(averageCheck(sumOfDigits(workArray)));
}
numberModification(101);
numberModification(5358);