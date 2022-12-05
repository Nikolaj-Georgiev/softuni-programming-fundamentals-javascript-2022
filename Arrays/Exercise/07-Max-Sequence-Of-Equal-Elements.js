function maxSequenceOfEqualElements(array) {

    longestSequence = [];

    for (let i = 0; i < array.length; i++) {
        let currentElement = Number(array[i]);
        let localArray = [];
        localArray.push(currentElement);
        for (let j = i + 1; j < array.length; j++) {

            if (currentElement == Number(array[j]) && j < array.length) {
                localArray.push(array[j]);
            } else {
                break;
            }

        }
        // if (localArray.length > 1 && longestSequence.length == 0) {
        //     longestSequence = localArray.slice();
        // }
        if (localArray.length > 1 && longestSequence.length == 0) {
            for (let k = 0; k < localArray.length; k++) {
                longestSequence.push(localArray[k]);
            }
        }
        if (localArray.length > longestSequence.length) {
            longestSequence = [];
            // longestSequence = localArray.slice();
            for (let l = 0; l < localArray.length; l++) {
                longestSequence[longestSequence.length] = localArray[l]
            }
        }
    }
    console.log(longestSequence.join(' '));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);