function getSumOfAnArray (numbers){
    let sum = 0;

    for (let i = 0; i < numbers.length; i++){
        const index = i;
        const elements = numbers[index];
        sum = sum+elements;
        console.log(index, elements, sum);
    }
    return sum;
}

const myNumbers = [20, 12, 11, 55, 60, 20, 10, 69];
getSumOfAnArray(myNumbers);