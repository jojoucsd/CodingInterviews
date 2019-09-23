function hourglassSum(arr) {
    let sum 
    let max
    arr.forEach((line,x) => {
        line.forEach((digit,y) =>{
            if (x < arr.length -2 && y < line.length -2) {
                let topLeft = arr[x][y]
                let topMid = arr[x][y+1]
                let topRight= arr[x][y+2]
                let mid = arr[x+1][y+1]
                let bottomLeft = arr[x+2][y]
                let bottomMid = arr[x+2][y+1]
                let bottomRight = arr[x+2][y+2]
                sum = topLeft + topMid + topRight + mid + bottomLeft + bottomMid + bottomRight 
            }
            if (max == undefined) {
                max = sum
            }
            if (sum > max) {
                max = sum
            }
        })
    })
    return max
}

let inputArr = [
    [1,1,1,0,0,0],
    [0,1,0,0,0,0],
    [1,1,1,0,0,0],
    [0,0,2,4,4,0],
    [0,0,0,2,0,0],
    [0,0,1,2,4,0]
]

hourglassSum(inputArr)