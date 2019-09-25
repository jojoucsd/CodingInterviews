triplets = (a,b,c) =>{
    // let merged = [...b, ...c]
    let count = 0 
    for (let i = 0 ; i < a.length; i++) {
        let condA = a[i]
        if (a[i] === a[i+1]) continue
        for (let j = 0 ; j < b.length; j++){
            let condB = b[j]
            if (b[j] === b[j+1]) continue
            for(let k = 0; k < c.length; k++){
                let condC = c[k]
                if (c[k] === c[k+1]) continue
                if(condA <= condB && condB>= condC){
                    count++
                }
            }
        }
    }
    console.log(count)
}

triplets1 = (a,b,c) =>{
    let count = 0
    let setA = [...new Set(a)].sort((a,b) => a-b)
    let setB = [...new Set(b)].sort((a,b) => a-b)
    let setC = [...new Set(c)].sort((a,b) =>a-b)
    let newA = setA.filter(int => int <= setB[setB.length - 1]) 
    let newC = setC.filter(int => int <= setB[setB.length - 1])
    for (let i = 0 ; i < newA.length; i ++){
        for(let j = 0; j < setB.length;j ++ ){
            for( let k = 0 ; k < newC.length; k++){
                if(newA[i]<= setB[j] && setB[j] >= newC[k]){
                    count++
                }
            }
        }
    }
    console.log(count)
}




let A= [1,3,5]
let B= [2,3]
let C=[1,2,3]

let A1= [1,4,5]
let B1=[2,3,3]
let C1=[1,2,3]

let A2= [1, 3, 5, 7]
let B2 =[5 ,7, 9]
let C2=[7, 9, 11, 13]

// triplets(A, B, C)
// triplets1(A, B, C)
// triplets1(A1, B1, C1)
triplets1(A2, B2, C2)