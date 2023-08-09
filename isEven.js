function isEven (number){
    const reminder = number % 2;
    if (reminder === 0){
        return true;
    }
    else {
        return false;
    }
}

var myNumIsEven = isEven(303);
console.log(myNumIsEven);

var herNumIsEven = isEven(1280);
console.log(herNumIsEven);