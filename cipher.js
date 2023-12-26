console.log("Hey There! time to solve a cipher! \n");

function cipherInput(input) {

    let newChar;

    console.log(`This is the original input ${input} \n`);

    input.toUpperCase();

    const inputStack = input.split('');

    console.log("The inputStack is: ", inputStack, "\n" );

    for (const char of inputStack) {

        let characterAsciiCode = char.charCodeAt();

        console.log(`char: ${char} \n ASCII value ${char.charCodeAt()} \n`);

        if (characterAsciiCode <= 90 && characterAsciiCode >=78) {

            console.log("It's in the second half holmes! \n");

            console.log(`the new char should be ${characterAsciiCode - 13} \n`);

            newChar = String.fromCharCode(characterAsciiCode - 13);

            console.log(`The new char should be ${newChar} \n `);


        } else if (characterAsciiCode <=77 && characterAsciiCode >=65) {

            console.log("Yo it's in the first half holmes! \n")

            console.log(`the new char should be ${characterAsciiCode + 13}`);

            newChar = String.fromCharCode(characterAsciiCode + 13);

            console.log(`The new char should be ${newChar}`);

        } else {

            console.log("Special Character dude! \n")

        }





    }

    console.log()
}




cipherInput("SERR PBQR PNZC");