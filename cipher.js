console.log("Hey There! time to solve a cipher! \n");

function cipherInput(input) {

    console.log(`This is the original input ${input} \n`);

    input.toUpperCase();

    const inputStack = input.split('');

    console.log("The inputStack is: ", inputStack, "\n" );

    for (const char of inputStack) {


        console.log(`char: ${char} \n ASCII value ${char.charCodeAt()}`);



    }
}




cipherInput("SERR PBQR PNZC");