function highestFrequency(arr) {
  const map = {}
  let max = 0
  let res = arr[0]
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i]
    if (map[elem]) {
      map[elem]++
    } else {
      map[elem] = 1
    }

    if (map[elem] > max) {
      max = map[elem]
      res = elem
    }
  }

  //   Object.entries(map).forEach((elem) => {
  //     if (elem[1] > max) {
  //       res = elem[0]
  //       max = elem[1]
  //     }
  //   })

  //   for (let key in map) {
  //     if (map[key] > max) {
  //       max = map[key]
  //       res = key
  //     }
  //   }
  return res
}

console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])) // -> c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])) // -> abc
console.log(highestFrequency(['abc', 'def'])) // -> abc
console.log(
  highestFrequency([
    'abc',
    'abc',
    'def',
    'def',
    'def',
    'ghi',
    'ghi',
    'ghi',
    'ghi',
  ])
) // -> ghi
