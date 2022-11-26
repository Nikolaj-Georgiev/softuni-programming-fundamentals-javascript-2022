function cone(coneRadius, coneHeight) {


    let slantHeight = Math.sqrt((coneRadius ** 2 + coneHeight ** 2));
    let coneBaseArea = Math.PI * coneRadius ** 2;
    let coneCurveArea = Math.PI * coneRadius * slantHeight;
    let coneTotalArea = coneBaseArea + coneCurveArea;
    let coneVolume = (1 / 3) * coneBaseArea * coneHeight;

    console.log(`volume = ${coneVolume.toFixed(4)}`);
    console.log(`area = ${coneTotalArea.toFixed(4)}`);
}
cone(3, 5);