function minimumAbsoluteDifference(arr) {
    let len = arr.length 
    let sorted = arr.sort((a,b) => a - b )
    let min = Math.abs(sorted[0] - sorted[1])
    
    for (let i = 1 ; i < len-1; i++ ){
        let temp = Math.abs(sorted[i] - sorted[i+1])
        if (temp < min) {
            min = temp
        }
    }
    return min
}

let arr1 = [3, -7, 0]
let arr2 = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75]
let arr3 = [1, -3, 71, 68, 17]
minimumAbsoluteDifference(arr3)