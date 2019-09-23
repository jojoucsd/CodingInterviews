var threeSum = function(nums) {
    nums = nums.sort((a,b) => a-b)
    
    let uniqueTriplets = []
    let i, j, k 
    let len = nums.length;
    
    for ( i = 0; i < len; i++) {
            if ( i > 0 && nums[i] === nums[i-1]) continue;
        for( j = i+1; j < len; j++) {
            if( j > i+1 && nums[j] === nums[j-1]) continue;
            for( k = j + 1; k < len; k++) {
            if ( k > j+1 && nums[k] === nums[k-1]) continue;
        
            if ((nums[i] + nums[j]+ nums[k])===0) {
            uniqueTriplets.push([nums[i], nums[j], nums[k]]);
            }
        }
    }
}
    console.log(uniqueTriplets)
};

const twoSum = ( arr, target) => {
    let result = []
    for (let i = 0 ; i<arr.length ; i++) {
        for(let j = i + 1; j<arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                result.push(i);
                result.push(j);
            }
        }
    }
}

const twoSum_On_Better = (arr, target) => {
    let numObject = {};
    for (let i = 0; i<arr.length; i++) {
        let thisNum = arr[i]
        numObject[thisNum] = i
    }
    for (let i = 0; i < arr.length; i++) {
        let diff = target - arr[i]
        if(numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
            return [i , numObject[diff]]
        }
    }
}
let twoDArr = [2,7,11,15]
let inputArr = [-1, 0, 1, 2, -1, -4]

// threeSum(inputArr)

console.log(twoSum_On_Better(twoDArr, 9))