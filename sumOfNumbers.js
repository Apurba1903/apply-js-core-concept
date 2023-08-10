// 1 + 2 + 3 + 4 + 5 + 6 + 7
function sumOfNumbers(number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum = sum + i;
        // console.log(i, sum);
    }
    return sum;
}
var myNumberIs = 10;
var final = sumOfNumbers(myNumberIs);
console.log(final);