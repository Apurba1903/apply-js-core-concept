function findSecondLargestNumber(arr) {
    
    let firstLargest = arr[0];
    let secondLargest = arr[1];

    if (secondLargest > firstLargest) {
        [firstLargest, secondLargest] = [secondLargest, firstLargest];
    }

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

const randomNumbers = [12, 45, 23, 67, 34, 56, 87, 10, 55];
const secondLargestNumber = findSecondLargestNumber(randomNumbers);

console.log("Array:", randomNumbers);
console.log("Second Largest Number:", secondLargestNumber);
