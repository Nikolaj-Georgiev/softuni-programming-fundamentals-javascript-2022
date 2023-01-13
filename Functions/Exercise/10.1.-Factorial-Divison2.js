function factorialDivision2(num1, num2) {


    function factorial(number) {
        if (number == 0) {
            return 1;
        } else {
            number *= (number - 1);
            if (number 1) {
                factorial(number - 1);
            }
        }
        return result;
    }

    console.log(factorial(num1));
    console.log(factorial(num2));

}
factorialDivision2(5, 2);