function specialNumbers(number) {

    for (let i = 1; i <= number; i++) {
        let stringOfNumber = String(i);
        let sum = 0;
        for (let j = 0; j < stringOfNumber.length; j++) {
            let numberFromChar = Number(stringOfNumber[j]);
            sum += numberFromChar;
        }

        let isSpecial = (sum === 5 || sum === 7 || sum === 11);
        console.log(`${i} -> ${isSpecial ? 'True' : 'False'}`);
    }
}
specialNumbers(20);