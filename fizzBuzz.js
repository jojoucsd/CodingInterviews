// for (let i = 1; i <=100; i++) {
//     if ( i % 3 === 0 && i % 5 === 0){
//         console.log('FizzBuzz')
//     }else if( i % 3 ===0 ){
//         console.log('Fizz')
//     }else if (i % 5 ===0) {
//         console.log('Buzz')
//     }else{
//         console.log(i)
//     }
// }

isMultiple = (num , mod) =>{
    return num % mod === 0;
} 

const main = [...Array(100)].map((_, i) =>{
    const num = i + 1
    switch (true) {
        case isMultiple(num, 15) : return "FizzBuzz";
        case isMultiple(num, 3): return "Fizz";
        case isMultiple(num, 5): return "Buzz";
        default: return num;   
    }
}).join("\n");

// console.log('main', main)

const myNewArray = [ ...Array(5)].map((_, i) =>i)
// console.log('new', myNewArray)

const obj1 = { one: 1, two: 2};

const copy = { ...obj1 };

copy.one = 2;

// console.log(obj1)
// console.log(copy)

// sum = (x, y, z) => {return x + y + z }

// const args = [0,1,2]

// console.log(sum(...args))

sum = (...arguments) =>{
    return [...arguments].reduce((acc,n) => acc+n)
}

const result = sum(...[...Array(100)].map((_, i)=> i))
// console.log(sum(1,2,3,4,5))
console.log(result)