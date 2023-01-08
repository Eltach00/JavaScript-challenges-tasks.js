function isUnique(string) {
  // for (let i = 0; i < string.length; i++) {
  //   const elem = string[i]
  //   let j = i +1
  //   while ( j < string.length) {
  //     if(elem === string[j]) {
  //       return false
  //     }
  //   }
  // }
  // return true

  // for (let i = 0; i < string.length; i++) {
  //   const char = string[i]
  //   if (set.has(char)) {
  //     return false
  //   }
  //   set.add(char)
  // }

  // return true

  return new Set(string).size === string.length
}

console.log(isUnique('abcdef')) // -> true
console.log(isUnique('1234567')) // -> true
console.log(isUnique('abcABC')) // -> true
console.log(isUnique('abcadef')) // -> false
