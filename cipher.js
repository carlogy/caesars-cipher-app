
function cipherInput(input) {

    let newChar;

    input.toUpperCase();

    const inputStack = input.split('');

    const updatedCipherString = [];

    for (const char of inputStack) {

        let characterAsciiCode = char.charCodeAt();

        if (characterAsciiCode <= 90 && characterAsciiCode >= 78) {

            newChar = String.fromCharCode(characterAsciiCode - 13);

            updatedCipherString.push(newChar);


        } else if (characterAsciiCode <=77 && characterAsciiCode >= 65) {

            newChar = String.fromCharCode(characterAsciiCode + 13);

            updatedCipherString.push(newChar);

        } else {

            updatedCipherString.push(char);
        }

    }

    const str = updatedCipherString.join('');

    return str;
}

export {cipherInput};


