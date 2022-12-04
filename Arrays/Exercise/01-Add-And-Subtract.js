function addAndSubtract(input) {

    let oldArraySum = 0;
    let newArraySun = 0;

    for (let i = 0; i < input.length; i++) {
        oldArraySum += input[i];
        if (input[i] % 2 === 0) {
            input[i] = input[i] + i;
        } else {
            input[i] = input[i] - i;
        }
        newArraySun += input[i];
    }
    console.log(input);
    console.log(oldArraySum);
    console.log(newArraySun);

}
addAndSubtract([5, 15, 23, 56, 35]);