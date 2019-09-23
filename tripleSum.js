function triplets(a, b, c) {
a = [...new Set(a)].map(v =>{return {v:v, o:1}})
b = [...new Set(b)].map(v=>{return{v:v, o:2}})
c = [...new Set(c)].map(v=>{return{v:v, o:3}})

let joint = []
joint = joint.concat(a).concat(b).concat(c);

joint.sort((a,b) => {
    let d = a.v -b.v;
    if(d===0) {
        return a.o - b.o;
    } else {
        return d;
    }
})
let n1 = 0;
let n2 = 0;
let result = 0;

joint.forEach( n =>{
    if (n.o === 1 ) n1++
    else if( n.o === 2) n2++;
    else if (n.o === 3) {
        result += n1 * n2;
    }
})
    console.log(result)
}

let A= [1,3,5]
let B= [2,3]
let C=[1,2,3]

let A1= [1,4,5]
let B1=[2,3,3]
let C1=[1,2,3]
let A2= [1, 3, 5, 7]
let B3 =[5 ,7, 9]
let C3=[7, 9, 11, 13]

triplets(A, B, C)