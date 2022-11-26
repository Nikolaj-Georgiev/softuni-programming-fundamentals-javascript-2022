function lowerToUpperCase(character) {

    let isUpperCharacter = character === character.toUpperCase();
    let result = '';
    isUpperCharacter ? result = 'upper-case' : result = 'lower-case';

    console.log(result);

}
lowerToUpperCase('L');