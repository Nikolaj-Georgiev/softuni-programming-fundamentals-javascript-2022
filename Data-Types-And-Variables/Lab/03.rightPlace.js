function rightPlace(firstString, char, secondString) {

    let newString = firstString.replace('_', char);
    console.log((newString === secondString) ? 'Matched' : 'Not Matched');
}
rightPlace('Str_ng', 'i', 'String');