function sumAllEvenAndAllOdd(number) {

    let numString = number.toString();
    let evenSum = 0;
    let oddSum = 0;

    for (let el of numString) {
        if (el % 2 == 0) {
            evenSum += Number(el);
        } else {
            oddSum += Number(el);
        }
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`
}
console.log(sumAllEvenAndAllOdd(3495892137259234));;