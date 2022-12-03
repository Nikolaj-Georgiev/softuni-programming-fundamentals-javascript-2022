function sumEvenNumbers(arrayOfStrings) {

    let sum = 0;

    for (let i = 0; i < arrayOfStrings.length; i++) {
        let number = Number(arrayOfStrings[i]);
        if (number % 2 == 0) {
            sum += number;
        }
    }

    console.log(sum);

}
sumEvenNumbers(['2', '4', '6', '8', '10']);