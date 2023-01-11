function kSequence(lengthN, k) {

    let resultArray = [1];

    for (let i = 1; i < lengthN; i++) {
        let index = Math.max((resultArray.length - k), 0);

        let kNumbers = resultArray.slice(index);
        let sumOfK = 0;

        for (const iterator of kNumbers) {
            sumOfK += iterator;
        }

        resultArray.push(sumOfK);
    }

    console.log(resultArray.join(' '));
}

kSequence(6, 3);
kSequence(8, 2);
kSequence(9, 5);