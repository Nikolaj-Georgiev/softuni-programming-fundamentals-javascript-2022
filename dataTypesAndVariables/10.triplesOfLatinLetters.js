function triplesOfLatinLetters(value) {
    let newValue = Number(value);

    for (let i = 1; i <= newValue; i++) {
        let firstLetter = String.fromCharCode(96 + i);

        for (let j = 1; j <= newValue; j++) {
            let secondLetter = String.fromCharCode(96 + j);

            for (let k = 1; k <= newValue; k++) {
                let thirdLetter = String.fromCharCode(96 + k);
                let result = '';
                result += '' + firstLetter + secondLetter + thirdLetter;
                console.log(result);
            }

        }

    }

}
triplesOfLatinLetters('2');