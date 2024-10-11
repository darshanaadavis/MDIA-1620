
let horseName = "Tabby"
console.log ("Hello, this is my horse Tabitha. But most of the time we just call her " + horseName);
let isHorseInside= true;
let isHorse

constSTABLE_MONTHLY_FEE = 130
console.log("The monthly fee for the stables is " + constSTABLE_MONTHLY_FEE);
console.log("If you pay 3 months up front, you will get 10% off and save " + constSTABLE_MONTHLY_FEE*3*0.1 +"$");



//*Console.log out a message that introduces your horse and shares their nickname. Use a variable to store the nickname*//
//*Console.log out a message that states how much you would save with a 10% discount applied to a 3 month stay at your stables.*//

if(isHorseInside){
    console.log (horseName + " is inside");
} else {
    console.log (horseName + " is outside");
}


//*= is assignment, == works as equal sign, but you should use ===*//

let word = "Rainbow"
console.log(word.charAt(4));
//*prints out the first of string. first starts at 0. So 0, 1, 2, 3 etc. These are called Indexes*//

console.log(word.length);
//*produces the letter 7*//

let horseNames = [horseName,"Strawberry","Pandora"];
let horseAges=[3, 2, 10];
let horseLocation= ["inside", "outside", "gone (we lost her)"]
console.log(horseNames.length);
//*prints out 3*//

horseNames.push("Lettuce");
console.log(horseNames);
//* logs out: 'Tabby', 'Strawberry', 'Pandora', 'Lettuce']*//
console.log(horseNames[2]);
console.log(horseAges [2]);
console.log(`Welcome to my stables! There are ${horseNames.length} horses staying here! Their names are: ${horseNames[0]}, ${horseNames[1]}, and ${horseNames[2]}`)
//* ` is the preffered quote over ". " didn't work*//
 

console.log(`${horseNames[0]} is ${horseLocation[0]}`)
console.log(`${horseNames[1]} is ${horseLocation[1]}`)
console.log(`${horseNames[2]} is ${horseLocation[2]}`)
console.log(`${horseNames[3]} is ${horseLocation[3]}`)
