function isValid(s) {
    let obj = {}
    let count = {}

    Array.from(s).forEach(char =>{
        obj[char] = obj[char] || 0;
        obj[char]++
    })
    // console.log('obj', obj)
    Object.keys(obj).forEach( k => {
        count[obj[k]] = count[obj[k]] || 0;
        count[obj[k]] ++;
    })
    // console.log('count', count)
    let countArr = Object.keys(count).map(Number)
    // console.log('arr', countArr)
    if (countArr.length === 1) { return 'YES'}
    let twoCounts = countArr.length === 2;
    let [ a, b] = countArr;
    console.log(a)
    let oneOccurence = count[a] === 1 || count[b] === 1;
    let singleton = (count[a] === 1 && a ===1) || (count[b] === 1 && b ===1)
    let diffOfOne = (count[a] === 1 ? a - b : b - a) ===1;
    console.log('we got here')
    if ((singleton || diffOfOne) && twoCounts && oneOccurence) {
        console.log("YES")
        return 'YES'
    }
    console.log("NO")
    return 'NO'

}

let string = 'aaabbbccc'
let string2 = 'aaabbbc'
isValid(string)