function numMod(num) {

    let stringFromNum = num.toString();
    let workArr = [];
    let sumOfDigits = 0;
    for (let el of stringFromNum) {
        workArr.push(Number(el));
        sumOfDigits += Number(el);
    }

    let average = sumOfDigits / workArr.length;

    while (average < 5) {
        workArr.push(9);
        sumOfDigits += workArr[workArr.length - 1];
        average = sumOfDigits / workArr.length;
    }

    console.log(workArr.join(''));
}
numMod(5358);