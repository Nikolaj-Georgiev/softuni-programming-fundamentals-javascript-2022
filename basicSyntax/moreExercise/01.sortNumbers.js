function sortNumbers(num1, num2, num3) {

    let arrOfNum = [num1, num2, num3];
    let minNum = Math.min(...arrOfNum);
    let maxNum = Math.max(...arrOfNum);

    let midNum = 0;
    let minCounter = 0;
    let maxCounter = 0;

    for (let i = 0; i < arrOfNum.length; i++) {
        let local = arrOfNum[i];
        if (local > minNum && local < maxNum) {
            midNum = local;
        }
    }

    if (midNum == 0) {
        for (let i = 0; i < arrOfNum.length; i++) {

            if (arrOfNum[i] === minNum) {
                minCounter++;
            } else if (arrOfNum[i] === maxNum) {
                maxCounter++;
            }
        }
    }

    if (maxCounter > minCounter && midNum == 0) {
        midNum = maxNum;
    } else if (minCounter > maxCounter && midNum == 0) {
        midNum = minNum;
    }

    console.log(maxNum);
    console.log(midNum);
    console.log(minNum);

}
sortNumbers(2, 0, 0);