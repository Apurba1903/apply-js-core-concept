function milesToKilometer (miles){
    const kilometer = miles * 1.609 ;
    return kilometer;
}

const inputedMiles =  12;
const finalKilometer = milesToKilometer(inputedMiles);
console.log(finalKilometer, "Kilometers");