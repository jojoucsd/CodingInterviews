function substrCount(n, s) {
    let count = n;
    for (let i = 0; i < s.length; i++) {
        let nextIndex = i;
        while (s[i] === s[nextIndex + 1]) nextIndex++;
        if (i !== nextIndex) {
            const length = nextIndex - i;
            count = count + (length * (length + 1)) / 2;
            i = nextIndex;
        } else {
            let step = 1;
            console.log('i + step', s[i+ step])
            console.log('i+1', s[i+1])
            while (s[i + step] === s[i - step] && s[i + step] === s[i + 1]) {
                step++;
                count++;
            }
        }
    }
    console.log(count)
    return count;
}

let str = 'asasd'
let str2 = 'abcbaba'
let str3 = 'aaaa'

substrCount(5, str)
substrCount(7, str2)
// substrCount(4, str3)