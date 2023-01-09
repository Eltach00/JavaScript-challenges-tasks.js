const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

/* 180degree
00 01 02    22 21 20
10 11 12 -> 12 11 10
20 21 22    02 01 00
*/
/* 270degree
00 01 02    20 10 00
10 11 12 -> 21 11 01
20 21 22    22 12 02
*/

function rotate90(source) {
  const rotated = source.map((_) => [])

  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < source[i].length; j++) {
      rotated[j][source.length - 1 - i] = source[i][j]
    }
  }
  return rotated
}
function rotate180(source) {
  const rotated = source.map((_) => [])

  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < source[i].length; j++) {
      rotated[source.length - 1 - i][source.length - 1 - j] = source[i][j]
    }
  }
  return rotated
}
function rotate270(source) {
  const rotated = source.map((_) => [])

  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < source[i].length; j++) {
      rotated[source.length - 1 - j][i] = source[i][j]
    }
  }
  return rotated
}

console.table(rotate270(matrix))
