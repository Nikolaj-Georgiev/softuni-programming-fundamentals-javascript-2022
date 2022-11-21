function printAndSum(givenStart, givenEnd) {

    let sum = 0;
    let result = '';
    for (let i = givenStart; i <= givenEnd; i++) {
        sum += i;
        result += i + ' ';
    }
    console.log(result.trim(0));
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);