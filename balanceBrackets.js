isBalanced = (s) => {
    let stack = []
    let check = {'(':')','[':']','{':'}' }
    
    for (let i = 0 ; i < s.length ; i++){
        if (s[i] ==='(' || s[i] === '{' || s[i] === '['){
            stack.push(s[i])
        }
        else{
            let last = stack.pop()
            if(s[i] !== check[last]){return 'NO'}
        }
        console.log(stack)
    }
    if (stack.length !==0) {return 'NO'}
    return 'YES'
}

let arr = '{[()]}{[(])}{{[[(())]]}}'
isBalanced(arr)

isBalanced = ([...str]) => {return str.reduce((count, cur) => {
    ((cur === '(' && count++ || cur === ')' && count--)) &&
    ((cur === '{' && count++ || cur === '}' && count--)) &&
    ((cur === '[' && count++ || cur === ']' && count--));

    return count;
}, 0) === 0 }

['{', '[', '(', '{']
last = "{"
if(last != check ) break