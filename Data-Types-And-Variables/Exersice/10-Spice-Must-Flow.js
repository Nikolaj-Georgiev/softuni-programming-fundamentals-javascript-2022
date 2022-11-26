function spiceMustFlow(startingYield) {

    let workingDays = 0;
    let totalAmountOfSpice = 0;
    const workersRations = 26;

    for (let i = startingYield; i >= 100; i -= 10) {
        workingDays++;
        totalAmountOfSpice += i;
        totalAmountOfSpice -= workersRations;
    }

    if (totalAmountOfSpice >= workersRations) {
        totalAmountOfSpice -= workersRations;
    }

    console.log(workingDays);
    console.log(totalAmountOfSpice);

}
spiceMustFlow(450);