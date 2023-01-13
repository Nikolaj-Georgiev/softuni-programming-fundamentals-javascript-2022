function factorialDivision(startNum, endNum) {


    let final = 0

    for (let i = startNum; i > endNum; i--) {

        let currentNum = Number(i);
        if (currentNum == startNum) {
            final += currentNum
        } else {
            final *= currentNum
        }

    }

    console.log(final.toFixed(2));
}
factorialDivision(6, 2)