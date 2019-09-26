maxSubsetSum = (arr) =>{
        if (arr.length === 0) return 0
      
        let prev1 = 0
        let prev2 = 0
      
        for (let cur of arr) {
            let temp = prev1
            prev1 = Math.max(prev1, cur + prev2)
            prev2 = temp
        }
        return prev1
}
console.log(maxSubsetSum([3,7,4,6,5]))