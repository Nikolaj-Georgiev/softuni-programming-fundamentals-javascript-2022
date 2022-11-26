function triangleArea(sideA, sideB, sideC) {
    // A = \sqrt{s(s-a)(s-b)(s-c)},
    // s=\frac{a+b+c}{2}.

    let semiPerimeter = (sideA + sideB + sideC) / 2;
    let area = Math.sqrt(semiPerimeter * (semiPerimeter - sideA) * (semiPerimeter - sideB) * (semiPerimeter - sideC));

    console.log(area);


}
triangleArea(2, 3.5, 4);