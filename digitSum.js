superSum = (int) => {
    let len = int.length
    let total = 0
    for (let i = 0; i < len; i++) {
        total += parseInt(int[i])
    }
    return total
}

function digitSum(n, k) {
    let totalSum = (n.split('').reduce((a,b) => parseInt(a) + parseInt(b) , 0)) * k
    let returnSum = superSum(totalSum.toString())
    while (returnSum.toString().length > 1) {
        returnSum= superSum(returnSum.toString())
    }
    console.log(returnSum)
   return returnSum
}

let str3 = '123'
let str2 = '9875'
let str1 = '148'

digitSum(str1, 3)
digitSum(str2, 4)
digitSum(str3, 3)