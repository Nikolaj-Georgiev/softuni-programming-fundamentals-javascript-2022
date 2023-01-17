function sorting(arrayOfNumbers) {

    let workArray = arrayOfNumbers.slice(0);
    let biggest = arrayOfNumbers.sort((a, b) => b - a).slice(0, (arrayOfNumbers.length));
    let smallest = arrayOfNumbers.sort((a, b) => a - b).slice(0, (arrayOfNumbers.length));
    let resultArray = []
    let big = 0;
    let small = 0;

    for (let i = 0; i < workArray.length / 2; i++) {
        big = biggest[i];
        small = smallest[i];
        resultArray.push(big);
        resultArray.push(small);
    }

    if ((resultArray[resultArray.length - 1] === resultArray[resultArray.length - 2])) {
        resultArray.pop();
    }

    if (resultArray.length < workArray.length) {
        if (resultArray.length % 2 === 0) {
            resultArray.push(big);
        } else {
            resultArray.push(small);
        }
    }

    console.log(resultArray.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
// console.log('-------------------------------');
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);