function cuttingKLength(array) {

    let workArray = array.slice();
    let kNumber = workArray.shift();

    let firstK = workArray.slice(0, kNumber).join(' ');
    let lastK = workArray.slice(-kNumber).join(' ');
    console.log(`${firstK}\n${lastK}`);

}
cuttingKLength([2, 7, 8, 9]);
cuttingKLength([3, 6, 7, 8, 9]);