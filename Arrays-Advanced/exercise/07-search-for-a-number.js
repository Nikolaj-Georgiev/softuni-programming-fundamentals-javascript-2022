function searchForANumber(firstArray, secondArray) {

    let slicedArray = firstArray.slice(0, secondArray[0]);
    slicedArray.splice(0, secondArray[1]);
    let result = slicedArray.filter(x => x === secondArray[2]);
    console.log(`Number ${secondArray[2]} occurs ${result.length} times.`);

}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
console.log('-------------------------------------');
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);