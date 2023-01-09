function allAnagrams(array) {
  //   for (let i = 0; i < array.length - 1; i++) {
  //     const elem = array[i]
  //     for (const item of array[i + 1]) {
  //       if (elem.indexOf(item) === -1) {
  //         return false
  //       }
  //     }
  //   }
  //   return true
  const newArr = array.map((item) => {
    return item.split('').sort().join('')
  })

  //   for (let i = 1; i < newArr.length; i++) {
  //     if (newArr[i] !== newArr[0]) {
  //       return false
  //     }
  //   }
  //   return true

  const elem = newArr[0]

  return newArr.every((item) => item === elem)
}

console.log(allAnagrams(['abcd', 'bdac', 'cabd'])) // true
console.log(allAnagrams(['abcd', 'bdXc', 'cabd'])) // false
