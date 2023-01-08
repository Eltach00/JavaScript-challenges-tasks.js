function removeDupes(string) {
  //   const res = []
  //   const map = {}
  //   for (let i = 0; i < string.length; i++) {
  //     const char = string[i]
  //     if (!map[char]) {
  //       map[char] = true
  //       res.push(char)
  //     }
  //   }
  //   return res.join('')
  return Array.from(new Set(string)).join('')
}

console.log(removeDupes('abcd')) // -> 'abcd'
console.log(removeDupes('aabbccdd')) // -> 'abcd'
console.log(removeDupes('abcddbca')) // -> 'abcd'
console.log(removeDupes('abababcdcdcd')) // -> 'abcd'
