function distanceBetweenPoints(x1, y1, x2, y2) {
    let length = Math.abs(x1 - x2);
    let wight = Math.abs(y1 - y2);

    let diagonal = Math.sqrt(length ** 2 + wight ** 2);

    console.log(diagonal);

}
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);