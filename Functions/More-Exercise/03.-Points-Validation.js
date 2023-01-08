function pointsValidation(input) {

    let workArray = [];
    input.forEach(element => {
        workArray.push(element)
    });

    x1 = workArray[0];
    y1 = workArray[1];
    x2 = workArray[2];
    y2 = workArray[3];

    let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    let distanceA = Math.sqrt((x1 - 0) ** 2 + (y1 - 0) ** 2);
    let distanceB = Math.sqrt((x2 - 0) ** 2 + (y2 - 0) ** 2);

    for (let i = 0; i < 3; i++) {
        if (i == 0) {
            if (Number.isInteger(Number(distanceA))) {
                console.log(`{${x1}, ${y1}} to {${0}, ${0}} is valid`);
            } else {
                console.log(`{${x1}, ${y1}} to {${0}, ${0}} is invalid`);
            }
        } else if (i == 1) {
            if (Number.isInteger(Number(distanceB))) {
                console.log(`{${x2}, ${y2}} to {${0}, ${0}} is valid`);
            } else {
                console.log(`{${x2}, ${y2}} to {${0}, ${0}} is invalid`);
            }
        } else {
            if (Number.isInteger(Number(distance))) {
                console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
            } else {
                console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
            }
        }
    }
}
pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1]);