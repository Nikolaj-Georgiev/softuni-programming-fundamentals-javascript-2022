function thePyramidOfKingDjoser(base, increment) {

    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let height = 0;

    for (let floors = base; floors > 0; floors -= 2) {
        height++;
        if (floors > 1) {
            stone += ((floors - 2) * (floors - 2)) * increment;
        }
        if (height % 5 !== 0 && floors > 2) {
            marble += ((4 * floors) - 4) * increment;
        } else {
            if (floors > 2) {
                lapisLazuli += ((4 * floors) - 4) * increment;
            }
        }
        if (floors <= 2 && floors >= 1) {
            gold += floors * floors * increment;
        }

    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height * increment)}`);

}
thePyramidOfKingDjoser(11, 1);