checkPalindrom = (str) =>{
    for (let i = 0 ; i < str.length / 2; i ++){
        if(str[i] != str[str.length-1 - i])
            return false
    }
    return true
} 
buildPalindrome = (st) =>{
    let reverse = st.split('').reverse().join('')
    if( st === reverse){
        return st
    }else{
        for ( let i = 0 ; i < st.length; i++){
            if (checkPalindrom ( st + reverse.substring(reverse.length -1 - i))){
                return st + reverse.substring(reverse.length - 1 - i)
            }
        }
        return st + r.substring(1)
    }
}

let str = 'abcdc'

buildPalindrome(str)


