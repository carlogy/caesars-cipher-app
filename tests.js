
import {cipherInput} from './cipher.js';




const Test1 = cipherInput("SERR PBQR PNZC") === "FREE CODE CAMP" ? true : false;

const Test2 = cipherInput("SERR CVMMN!") === "FREE PIZZA!" ? true : false;

const Test3 = cipherInput("SERR YBIR?") === "FREE LOVE?" ? true : false;

const Test4 = cipherInput("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") === "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG." ? true : false;

const Test5 = cipherInput("FREE CODE CAMP") === "SERR PBQR PNZC" ? true : false;

const Test6 = cipherInput("FREE PIZZA!") === "SERR CVMMN!" ? true : false;

const Test7 = cipherInput("FREE LOVE?") === "SERR YBIR?" ? true : false;

const Test8 = cipherInput("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.") === "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT." ? true : false;



console.log(`Test 1 result: ${Test1} \n`);

console.log(`Test 2 result: ${Test2} \n`);

console.log(`Test 3 result: ${Test3} \n`);

console.log(`Test 4 result: ${Test4} \n`);

console.log(`Test 5 result: ${Test5} \n`);

console.log(`Test 6 result: ${Test6} \n`);

console.log(`Test 7 result: ${Test7} \n`);

console.log(`Test 8 result: ${Test8} \n`);

