/* const joysreeInch = 56;
const joysreeFeet = joysreeInch / 12;
console.log("Joysree's height is ", joysreeFeet , "feet");

const apurbaInch = 78;
const apurbaFeet = apurbaInch / 12;
console.log("Apurba's height is ", apurbaFeet , "feet");

const leonInch = 144;
const leonFeet = leonInch / 12;
console.log("Leon's height is ", leonFeet , "feet"); */


function inchToFeet (inches){
    const feet = inches / 12;
    return feet;
}

const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);