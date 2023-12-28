
import {cipherInput} from './cipher.js';


const Test1 = cipherInput("SERR PBQR PNZC") === "FREE CODE CAMP" ? true : false;

const Test2 = cipherInput("SERR CVMMN!") === "FREE PIZZA!" ? true : false;

const Test3 = cipherInput("SERR YBIR?") === "FREE LOVE?" ? true : false;

const Test4 = cipherInput("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") === "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG." ? true : false;



console.log(`Test 1 result: ${Test1} \n`);

console.log(`Test 1 result: ${Test2} \n`);

console.log(`Test 1 result: ${Test3} \n`);

console.log(`Test 1 result: ${Test4} \n`);

