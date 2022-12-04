function commonElements(firstArray, secondArray) {

    let firstArrLength = firstArray.length;
    for (let i = 0; i < firstArrLength; i++) {
        let firstElement = firstArray[i];
        for (let j = 0; j < firstArrLength; j++) {
            let secondElement = secondArray[j];
            if (firstElement === secondElement) {
                console.log(secondElement);
            }
        }
    }
}
commonElements(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']
);

function commEl(arr1, arr2) {

    for (let el of arr1) {
        if (arr2.includes(el)) {
            console.log(el);
        }
    }

}
commEl(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);