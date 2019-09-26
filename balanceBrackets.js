function isBalanced(s) {
let arr = s.split('')
let last = arr.length - 1
for (let i = 0; i < arr.length; i++){
    if(checkBalance(s[i], s[last])){
        last --
        continue
    }else{
        console.log('NO')
        break
    }
    console.log('Yes')
}
}

checkBalance = (front, back) =>{
    if (front === '{' && back === '}') {
        return true
    }
    if (front === '[' && back === ']'){
        return true
    }
    if (front === '(' && back === ')'){
        return true
    }
    else return false
}

let arr = '{[()]}{[(])}{{[[(())]]}}'
isBalanced(arr)

isBalanced = ([...str]) => {return str.reduce((count, cur) => {
    ((cur === '(' && count++ || cur === ')' && count--)) &&
    ((cur === '{' && count++ || cur === '}' && count--)) &&
    ((cur === '[' && count++ || cur === ']' && count--));

    return count;
}, 0) === 0 }