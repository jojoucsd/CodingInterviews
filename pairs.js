function pairs(k, arr) {
    let mySet = new Set(arr.map(digt => digt))
    let len = arr.length
    let count = 0 

    for ( let i= 0; i < len; i++) {
        if(mySet.has(arr[i]+k)){
            count++
        }
    }
    // let sorted = arr.sort((a,b) => b-a)
    // let len = arr.length
    // let count = 0
    // for (let i = 0 ; i <len ; i++){
    //     for(let j = 1; j < len; j++){
    //         if(sorted[i] - sorted[j] > k) {
    //             break
    //         }else if(sorted[i] - sorted[j]===k){
    //             count++
    //             break
    //         }
    //     }
    // }
    // console.log(count)
}


let target = [2,1,2]
let arr1 = [1,5,3,4,2]
// let arr2 = [363374326,364147530,61825163,1073065718,1281246024,1399469912,428047635,491595254,879792181,1069262793]
// let arr3 = [1, 3, 5, 8, 6, 4, 2 ]

pairs(target[0], arr1)
pairs(target[1], arr2)
pairs(target[2], arr3)