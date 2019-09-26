minTime = (m, goal) => {
    const min = Math.min(...m);
    const max = Math.max(...m);
    let minDay = Math.ceil(goal / m.length) * min;
    let maxDay = Math.ceil(goal / m.length) * max;
    const getSum = (arr, d) =>console.log('redu',d) || arr.reduce((total, machine) => total + Math.floor(d / machine), 0);
    while (minDay < maxDay) {
      const day = Math.floor((maxDay + minDay) / 2);
      const sum = getSum(m, day);
      console.log('while', sum)
      if (sum >= goal) {
        maxDay = day;
      }
      else {
        minDay = day + 1;
      }
    }
    console.log(minDay)
    return minDay;
  }

  let inputArr = [4,5,6]

  minTime (inputArr, 12)