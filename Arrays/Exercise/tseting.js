function generic(arr) {
    let newArr = []
    for (let el of arr) {
        newArr.push(el)
    }

    let field = newArr[0]
    let otherBugs = newArr[1].split(" ")
    let fieldArr = []
    for (let i = 0; i < field; i++) {
        fieldArr.push(0)
    }
    for (let i = 0; i < otherBugs.length; i++) {
        if (fieldArr[otherBugs[i]] >= 0 && fieldArr[otherBugs[i]] < field)
            fieldArr[otherBugs[i]] = 1
    }

    for (let i = 2; i < newArr.length; i++) {

        let temp = newArr[i].split(" ")
        let position = +temp[0];
        let direction = temp[1];
        let distance = +temp[2];

        if (fieldArr[position] !== 1 || position < 0 || position >= fieldArr.length) {
            continue;
        }
        fieldArr[position] = 0
        if (direction == "right") {
            let travel = position + distance

            if (fieldArr[travel] == 1) {
                travel += distance
            }
            if (fieldArr[travel] <= fieldArr.length) {
                fieldArr[travel] = 1
            }
        } else {
            let travel = position - distance

            if (fieldArr[travel] == 1) {
                travel -= distance
            }
            if (travel >= 0) {
                fieldArr[travel] = 1
            }
        }
    }
    console.log(fieldArr.join(" "))

}
generic([3, '0 1 2',
    '0 right 1',
    '1 right 1',
    '2 right 1'
]);