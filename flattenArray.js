function flatten(arr) {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const flat = flatten(arr[i])
      for (let j = 0; j < flat.length; j++) {
        newArr.push(flat[j])
      }
    } else {
      newArr.push(arr[i])
    }
  }
  return newArr
}

console.log(flatten([[1], [[2, 3]], [[[4]]]])) // -> [1, 2, 3, 4]
