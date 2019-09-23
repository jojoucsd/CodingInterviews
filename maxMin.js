function maxMin(k, arr) {
let sorted = arr.sort((a,b) => a-b)
let len = arr.length
let min = sorted[0 + k - 1] - sorted[0]
let temp

    for (let i = 0; i < (len - k + 1); i++) {
        temp = Math.abs(arr[i + (k-1)] - arr[i])
        if (temp < min) {
            min = temp
        }
    }
    console.log(min)
}

let arr1 = [ 10, 100, 300, 200, 1000, 20, 30 ]
let arr2 = [ 1, 2, 3, 4, 10, 20, 30, 40, 100, 200 ]
let arr3 = [ 1, 2, 1, 2, 1 ]

maxMin(3, arr1)
maxMin(4, arr2)
maxMin(2, arr3)