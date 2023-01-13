function numberModification(number) {
    let sum = 0;
    let avgValue = 0;
    let result = '';

    while (avgValue < 5) {
        let numArr = Array.from(String(number), Number);

        for (num of numArr) {
            sum += num;
        }

        avgValue = sum / numArr.length;

        if (avgValue < 5) {
            numArr.push(9);
        } else {
            result = numArr.join('');
        }
        number = numArr.join('');
        sum = 0;
    }
    console.log(result);
}
numberModification(101);