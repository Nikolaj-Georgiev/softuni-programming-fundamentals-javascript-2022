function triangleOfNumbers(singleNumber) {

    for (i = 1; i <= singleNumber; i++) {
        let result = '';
        for (j = 1; j <= i; j++) {
            result += `${i} `;
        }
        console.log(result);
    }
}
triangleOfNumbers(6);