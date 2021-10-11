const arr1 = [1, 2, 3, 4, 5]; // arr1[5] //undefined
const arr2 = [0, 3, 1, 10, 22];
const arr3 = [28, 2, 1];

function sumOfArray(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sumOfArray(arr.slice(1));
}

console.log(sumOfArray(arr1));
// 1 + sumOfArray([2, 3, 4, 5]) -> 14
// 2 + sumOfArray([3, 4, 5]) -> 12
// 3 + sumOfArray([4, 5]) -> 9
// 4 + sumOfArray([5]) -> 5
// 5 + sumOfArray([]) -> 0

console.log(sumOfArray(arr2));
console.log(sumOfArray(arr3));
