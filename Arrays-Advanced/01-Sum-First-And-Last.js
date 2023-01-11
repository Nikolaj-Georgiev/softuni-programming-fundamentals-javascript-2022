function firstLastSum(input) {

    let firstNumber = Number(input.shift());
    let lastNumber = Number(input.pop());
    console.log(firstNumber + lastNumber);
}
firstLastSum(['20', '30', '40'])