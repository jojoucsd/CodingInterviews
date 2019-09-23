function getMinimumCost(k, c) {
    let n = c.length
    let sorted = c.sort((a,b) => a - b )
    let firstSum = c.reduce((a,b) => a + b, 0)
    let remainder = n % k
    let round = Math.floor( n / k)
    let total = 0
    if ( k >= n) {
        return firstSum
    }
    else{
        for (let i = 0 ; i < n ; i ++) {
            if( i < remainder) {
                total += round * c[i]
            }
            total += round * c[i]
        }
        console.log(total)
    }
}
// let arr1 = [2,5,6]
// let arr2 = [1,3,5,7,9]
let arr3 = [3,7,1,6,2,4]

// getMinimumCost(3,arr2)
// getMinimumCost(2,arr1)
getMinimumCost(3,arr3)