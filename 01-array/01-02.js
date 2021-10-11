const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

const getAverage = (arr) => {
    const avg = arr.reduce((acc, curr) => acc + curr, 0)/arr.length;
    const result = arr.reduce((acc, curr) => (curr > avg) ? acc + 1 : acc, 0);
    return result;
};

const o = getAverage(arr1);
const o2 = getAverage(arr2);

console.log(o2);
