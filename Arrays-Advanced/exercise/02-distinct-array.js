function uniqueNumbers(array) {

    let workArray = array.slice(0);

    let resultArray = [];
    for (let element of workArray) {
        workArray.forEach(element => {
            if (!resultArray.includes(element)) {
                resultArray.push(element);
            }
        });
    }

    console.log(resultArray.join(' '));
}

uniqueNumbers([1, 2, 3, 4]);
uniqueNumbers([7, 8, 9, 7, 2, 3, 4, 1, 2]);
uniqueNumbers([20, 8, 12, 13, 4, 4, 8, 5]);