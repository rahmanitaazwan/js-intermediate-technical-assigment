const arr = [1, 2, 3, 4, 5];
function searchInArray(arr, val) {
    if (arr[arr.length - 1] === val) {
        return `ketemu di index ${arr.length - 1}`;
    }
    if (arr.length === 1) {
        return "gak ketemu";
    }
    return searchInArray(arr.slice(0, -1), val);
}


console.log(searchInArray(arr, 6));
console.log(searchInArray(arr, 1));
console.log(searchInArray(arr, 8));
