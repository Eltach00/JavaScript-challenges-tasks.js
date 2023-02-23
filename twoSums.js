const twoSum = function (nums, target) {
  const arr = []

  if (nums[0] + nums[1] === target) {
    return arr.push(0, 1)
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        arr.push(i, j)
        break
      }
    }
    if (arr.length) {
      break
    }
  }
  return arr
}

console.log(twoSum([3, 2, 3, 3], 6))
