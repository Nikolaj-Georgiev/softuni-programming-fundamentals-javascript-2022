function amazingNumbers(number) {
    let stringOfNumber = String(number);
    let sum = 0;

    for (let i = 0; i < stringOfNumber.length; i++) {
        let numberFromChar = Number(stringOfNumber[i]);
        sum += numberFromChar;
    }
    let stringFromSum = String(sum);

    let isAmazingNumber = stringFromSum.includes('9');

    console.log(`${number} Amazing? ${isAmazingNumber ? 'True' : 'False'}`);
}
amazingNumbers(1233);