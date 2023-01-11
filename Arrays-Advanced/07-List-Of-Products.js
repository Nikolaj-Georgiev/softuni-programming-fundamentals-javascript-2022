function orderedList(stringArray) {
    let workArr = stringArray.slice();

    // let result = workArr.sort((a, b) => a.localeCompare(b)).map((x, i) => `${i+1}.${x}`);
    let result = workArr.sort().map((x, i) => `${i+1}.${x}`);
    console.log(result.join('\n'));

}

orderedList(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
orderedList(['Watermelon', 'Banana', 'Apples']);