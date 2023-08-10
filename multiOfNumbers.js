function multiOfNumbers(number) {
    let multi = 1;
    for (let i = 1; i <= number; i++) {
        multi = multi * i;
        // console.log(i, sum);
    }
    return multi;
}
var myNumberIs = 20;
var final = multiOfNumbers(myNumberIs);
console.log(final);