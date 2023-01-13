function swapElements(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        swap(arr, i, arr.length - 1 - i);
    }

    console.log(arr.join(' '));
    
    function swap(elements, i, j) {
        let temp = elements[i];
        elements[i] = elements[j];
        elements[j] = temp;
    }
}


