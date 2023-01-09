function isStringRotated(source, test) {
  //   if (source.length !== test.length) {
  //     return false
  //   }

  //   for (let i = 0; i < source.length; i++) {
  //     const element = source.slice(i, source.length) + source.slice(0, i)

  //     if (element === test) {
  //       return true
  //     }
  //   }

  //   return false

  return (source + source).includes(test) && source.length === test.length
}

console.log(isStringRotated('javascript', 'scriptjava')) // -> true
console.log(isStringRotated('javascript', 'iptjavascr')) // -> true
console.log(isStringRotated('javascript', 'java')) // -> false
