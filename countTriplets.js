function countTriplets(arr, r) {
    let len = arr.length //1,1,3,9
    let count = 0
    var m2 = new Map()
    arr.forEach((ele) => {
        m2.set(ele , m2.get(ele) ? m2.get(ele) + 1 : 1)
    })

    const keys = Array.from(m2.keys());
    for (let i = 0; i < keys.length; i++) {
      let double = keys[i] * r
      let triple = keys[i] * r * r
      if (m2.has(keys[i]) && m2.has(double) && m2.has(triple)){
        let max = Math.max(m2.get(keys[i]), m2.get(double), m2.get(triple))
        count = count + max
      }
    }
    console.log('count', count)
    return count
    }

let arr = [1, 5, 5, 25, 125]
let arr1 = [1,1,1,1,1,]

// countTriplets(arr, 5)
countTriplets(arr1, 1)
