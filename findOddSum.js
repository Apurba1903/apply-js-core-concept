function getSumOfAnArray (numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        const index = i;
        const elements = numbers[index];
        sum = sum+elements;
        // console.log(index, elements, sum);
    }
    return sum;
}

function getOddNumberOfAnArray (numbers){
    const oddnumber = [];
    for (let i = 0; i < numbers.length; i++){
        const index = i;
        const elements = numbers[index];
        if (elements % 2 === 1){
            console.log(index, elements);
            oddnumber.push(elements);
        }
    }
    return oddnumber;
}
const myNumbers = [20, 12, 11, 55, 60, 20, 61, 69];
getSumOfAnArray(myNumbers);

const oddNumbers = getOddNumberOfAnArray(myNumbers);
console.log(oddNumbers);

const oddNumberSum = getSumOfAnArray(oddNumbers);
console.log('The sum of odd number is ', oddNumberSum);
