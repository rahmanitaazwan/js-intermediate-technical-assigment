// DARI NOMOR 1
const arr1 = [1, 2, 3, 4, 5]; // arr1[5] //undefined
const arr2 = [0, 3, 1, 10, 22];

function sumOfArray(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sumOfArray(arr.slice(1));
}

// UNTUK NOMOR 2
// RATA-RATA = MENJUMLAHKAN SEMUA NILAI ARRAY DIBAGI JUMLAH DATA PADA ARRAY
// 1. LAKUKAN ITERASI PADA SETIAP ARRAY
// 2. PADA SETIAP ITERASI TERHADAP NILAI PADA ARRAY, LAKUKAN PENGECEKAN
//    APAKAH NILAI PADA ARRAY (ACTIVE VALUE) LEBIH BESAR DARIPADA AVERAGE
// 3. JIKA NILAI PADA ARRAY (1/2/3...) LEBIH BESAR DARI AVERAGE, MAKA
//    LAKUKAN INCREMENTAL (DITAMBAH 1) PADA NILAI KEMBALIAN
// 4. JIKA TIDAK LEBIH BESAR, MAKA NILAI KEMBALIAN AKAN DIDIAMKAN (DITAMBAH 0)
const avg1 = sumOfArray(arr1) / arr1.length; // 3 -> 3 nilai diatas rata2
const avg2 = sumOfArray(arr2) / arr2.length; // 7.2 -> 2 nilai diatas rata2

function countAboveAvg(arr, avg) {
    if (arr.length === 0) {
        return 0;
    }
    let temp;
    if (arr[0] >= avg) {
        temp = 1;
    } else {
        temp = 0;
    }
    return temp + countAboveAvg(arr.slice(1), avg);
}

// arr[0] >= avg => true => 1
// arr[0] >= avg => false => 0

// 1) FALSE + countAboveAvg([2, 3, 4, 5], 3) -> 3
// 2) FALSE + countAboveAvg([3, 4, 5], 3) -> 3
// 3) TRUE +  2
// 4) TRUE +  1
// 5) TRUE +  0 => 1

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);
