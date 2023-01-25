function wallBuilder(inputArr) {

    let workArray = inputArr.map(x => Number(x)).sort((a, b) => a - b);
    let longestWorkingGroup = 30 - workArray[0];
    let sumPesos = 0;
    let dailyConcreteArray = [];
    let workingGroups = workArray.filter(x => x !== 30);
    for (let i = 0; i < longestWorkingGroup; i++) {
        let dailyConcreteUsed = 0;
        dailyConcreteUsed = workingGroups.length * 195;
        workingGroups = workingGroups.map(x => x + 1);
        workingGroups = workingGroups.filter(x => x !== 30);
        dailyConcreteArray.push(dailyConcreteUsed);
        sumPesos += dailyConcreteUsed * 1900;
    }

    console.log(dailyConcreteArray.join(', '));
    console.log(`${sumPesos} pesos`);

}

wallBuilder(['21', '25', '28']);