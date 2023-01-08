function carWash(inputArray) {

    let workArray = [];
    inputArray.forEach(element => {
        workArray.push(element);
    });

    let carCleanness = 0;

    for (let el of workArray) {
        switch (el) {
            case 'soap':
                carCleanness += 10;
                break;
            case 'vacuum cleaner':
                carCleanness += (carCleanness * (25 / 100));
                break;
            case 'mud':
                carCleanness -= (carCleanness * (10 / 100));
                break;
            case 'water':
                carCleanness += (carCleanness * (20 / 100));
                break;
            default:
                break;
        }
    }

    console.log(`The car is ${carCleanness.toFixed(2)}% clean.`);

}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);