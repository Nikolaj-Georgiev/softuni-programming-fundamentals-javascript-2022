function sortingByTwoCriteria(array) {

    let workArray = array.slice(0);

    let sortedArray = workArray.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });

    console.log(sortedArray.join('\n'));
}

sortingByTwoCriteria(['alpha', 'beta', 'gamma']);
console.log('--------------------------------');
sortingByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
console.log('---------------------------------');
sortingByTwoCriteria(['test', 'Deny', 'omen', 'Default']);