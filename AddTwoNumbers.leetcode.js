const addTwoNumbers = function (l1, l2) {
  const newL1 = [...l1].reverse()
  const newL2 = [...l2].reverse()
  const n1 = parseInt(newL1.reduce((s, i) => (s += i), ''))
  const n2 = parseInt(newL2.reduce((s, i) => (s += i), ''))
  const str = (n1 + n2).toString()
  return str.split('').reverse()
}

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]))
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]))
