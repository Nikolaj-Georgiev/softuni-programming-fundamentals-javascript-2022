function addAndRemove(inputArray) {

    let counter = 1;
    let resultArray = [];


    for (let element of inputArray) {
        if (element === 'add') {
            resultArray.push(counter);
        } else if (element === 'remove') {
            resultArray.pop();
        }
        counter++;
    }
    if (resultArray.length <= 0) {
        console.log('Empty');
    } else {
        console.log(resultArray.join(' '));
    }

}
addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);