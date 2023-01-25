function arrayManipulator(arrayOfNumbers, arrayOfCommands) {

    let flag = false;
    for (let i = 0; i < arrayOfCommands.length; i++) {
        let commandArray = arrayOfCommands[i].split(' ');
        switch (commandArray[0]) {
            case 'add':
                let index = Number(commandArray[1]);
                let addedNumber = Number(commandArray[2])
                arrayOfNumbers.splice(index, 0, addedNumber);
                break;
            case 'addMany':
                let manyArray = commandArray.slice(2);
                let indexOfMany = Number(commandArray[1]);
                let counter = 0;
                while (indexOfMany !== (Number(commandArray[1]) + manyArray.length)) {
                    arrayOfNumbers.splice(indexOfMany, 0, Number(manyArray[counter]));
                    indexOfMany++;
                    counter++;
                }
                break;
            case 'contains':
                console.log(arrayOfNumbers.indexOf(Number(commandArray[1])));
                break;
            case 'remove':
                arrayOfNumbers.splice(Number(commandArray[1]), 1);
                break;
            case 'shift':
                for (let shift = 0; shift < Number(commandArray[1]); shift++) {
                    let shifted = Number(arrayOfNumbers.shift());
                    arrayOfNumbers.push(shifted);
                }
                break;
            case 'sumPairs':
                let summedArray = [];
                for (let i = 0; i < arrayOfNumbers.length; i += 2) {
                    let sumOfTwo = 0;
                    if (i === arrayOfNumbers.length - 1) {
                        sumOfTwo = Number(arrayOfNumbers[i]) + 0;
                    } else {
                        sumOfTwo = Number(arrayOfNumbers[i]) + Number(arrayOfNumbers[i + 1]);
                    }
                    summedArray.push(sumOfTwo);
                }
                arrayOfNumbers = summedArray.slice(0);
                break;
            case 'print':
                flag = true;
                break;
        }

        if (flag) {
            break;
        }

    }

    console.log(`[ ${arrayOfNumbers.join(', ')} ]`);
}

arrayManipulator([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]);
// console.log('----------------------------------');
// arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);