function orders(product, quantity) {
    let result;
    let coffee = 1.50;
    let water = 1.00;
    let coke = 1.40;
    let snacks = 2.00;

    switch (product) {
        case 'coffee':
            result = coffee * quantity;
            break;
        case 'water':
            result = water * quantity;
            break;
        case 'coke':
            result = coke * quantity;
            break;
        case 'snacks':
            result = snacks * quantity;
            break;
    }
    return result.toFixed(2);

}
console.log(orders("water", 5));
orders("coffee", 2);