function rotateArray(inputArray) {

    let rotationsNumber = Number(inputArray[inputArray.length - 1]);

    let workArray = [];
    for (let i = 0; i < inputArray.length - 1; i++) {
        workArray.push(inputArray[i]);
    }

    for (let j = 0; j < rotationsNumber; j++) {
        let lastElementHolder = workArray.pop();
        workArray.unshift(lastElementHolder);

    }
    console.log(workArray.join(' '));

}
rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);

function rotateArray1(inputArray1) {

    let rotationsNumber1 = Number(inputArray1[inputArray1.length - 1]);

    let workArray1 = [];
    for (let i = 0; i < inputArray1.length - 1; i++) {
        workArray1.push(inputArray1[i]);
    }

    for (let j = 0; j < rotationsNumber1; j++) {
        let lastElementHolder1 = workArray1[workArray1.length - 1];
        let tempArray = [lastElementHolder1];
        for (let k = 1; k < workArray1.length; k++) {
            tempArray[k] = workArray1[k - 1];
        }
        workArray1 = tempArray;

    }
    console.log(workArray1.join(' '));

}
rotateArray1(['1', '2', '3', '4', '2']);
rotateArray1(['Banana', 'Orange', 'Coconut', 'Apple', '15']);