threeSum2 = (arr) => {
    arr.sort((a,b) => {return a - b});

    const result = [];

    for (let indexA = 0; indexA < arr.length - 2; indexA++) {
        let indexB = indexA + 1 //next element
        let indexC = arr.length -1; //last index reverse

        if ( indexA > 0 && arr[indexA] === arr[indexA-1]) continue // if current index equal to last index skip

        while(indexB < indexC) {
            let sum = arr[indexA] + arr[indexB] + arr[indexC];

            if ( sum < 0) { indexB++}
            else if (sum > 0) { indexC--}
            else {
                result.push([arr[indexA], arr[indexB], arr[indexC]]);
                while(arr[indexB] === arr[indexB +1]) indexB++;
                while(arr[indexC] === arr[indexC -1]) indexC--;
                indexB++;
                indexC--;
            }
        }
    }
    return result
}

// console.log(threeSum2([-1,0,1,2,-1,-4]));

threeSum3 = (nums) =>{
    nums.sort((a,b) => a - b);

    const result = [];

    for (let indexA = 0; indexA < nums.length -2 ; indexA++){
        const a = nums[indexA];  
        if(a > 0)  return result;
        if(a === nums[indexA - 1 ]) continue;

        let indexB = indexA + 1;
        let indexC = nums.length - 1;
        
        while ( indexB < indexC ){
            const b = nums[indexB]
            const c = nums[indexC]
            if((a+b+c) === 0) {
                result.push([a,b,c]);
            }
            if((a+b+c) >= 0 ){
                while(nums[indexC-1] === c) { indexC-- }
                indexC--
            }
            if((a+b+c) <= 0){
                while(nums[indexB+1] === b) { indexB++ }
                indexB++
            }
        }
    }
    console.log(result[0],result[1])
    return result;
}

// console.log(threeSum3([-1,0,1,2,-1,-4]));

threeSum3([-1,0,1,2,-1,-4])