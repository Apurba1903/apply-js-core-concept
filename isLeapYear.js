function isLeapYear (year){
    const reminder = year % 4;
    if (reminder === 0){
        return true;
    }
    return false;
   
}
var myYearIs = 2000;
console.log(myYearIs);
var myYearIsLeapYear = isLeapYear(myYearIs);
console.log("Is it leap year?", myYearIsLeapYear);