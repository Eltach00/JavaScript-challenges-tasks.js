function bSearch(arr, target) {
  let low = 0
  let high = arr.length - 1

  while (low <= high) {
    let mid = Math.round((low + high) / 2)
    let guess = arr[mid]
    if (guess === target) {
        return mid
    }
    if (target < guess) {
        high = mid - 1
    } else {
        low = mid + 1
    }
  }
  return null
}

console.log(bSearch([1, 2, 3, 4, 5, 6, 7], 6));
