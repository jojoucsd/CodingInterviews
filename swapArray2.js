// You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any duplicates. You are allowed to swap any two elements. You need to find the minimum number of swaps required to sort the array in ascending order.
//
// For example, given the array  we perform the following steps:
//
// i   arr                         swap (indices)
// 0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
// 1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
// 2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
// 3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
// 4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
// 5   [1, 2, 3, 4, 5, 6, 7]
// It took  swaps to sort the array.
//
// Function Description
//
// Complete the function minimumSwaps in the editor below. It must return an integer representing the minimum number of swaps to sort the array.
//
// minimumSwaps has the following parameter(s):
//
// arr: an unordered array of integers
// Input Format
//
// The first line contains an integer, , the size of .
// The second line contains  space-separated integers .
//
// Constraints
//
// Output Format
//
// Return the minimum number of swaps to sort the given array.
//
// Sample Input 0
//
// 4
// 4 3 1 2
// Sample Output 0
//
// 3
// Explanation 0
//
// Given array
// After swapping  we get
// After swapping  we get
// After swapping  we get
// So, we need a minimum of  swaps to sort the array in ascending order.

function minimumSwaps(arr) {
    const sorted = arr.slice().sort((a, b) => a - b);
    const indexMap = new Map();
    arr.forEach((v, i) => indexMap.set(v, i));
    let swaps = 0;
    arr.forEach((v, i) => {
        if (v !== sorted[i]) {
            swaps ++;
            arr[indexMap.get(sorted[i])] = v;
            arr[i] = sorted[i];
            indexMap.set(v, indexMap.get(sorted[i]));
        }
    })
    console.log('swaps1', swaps)
    return swaps
}

minimumSwaps2 = arr =>{
  let swaps = 0;
  let length = arr.length;
  let arr2 = arr.slice().sort((a,b) => a-b);

  const map = arr.reduce((acc, cur, i) => {
    acc[cur] = i;
    return acc;
  }, {})

  for (let i = 0 ; i < length; i++){
    const v1 = arr[i]
    const v2 = arr2[i]
    if (v2 != v1) {
      swaps ++;
      const index = map[v2]
      arr[index]= v1
      arr[i] = v2
      map[v1] = index
    }
  }
  console.log('swaps', swaps)
  return swaps;
}

minimumSwaps2([4,3,1,2])
// minimumSwaps([4,3,1,2])
