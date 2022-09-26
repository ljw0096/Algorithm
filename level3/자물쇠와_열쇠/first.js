function rotate(arr) {
  const result = Array.from({ length: arr.length }, () => [])
  for (let i = 0; i < arr.length; ++i) {
    for (let j = arr.length - 1; j >= 0; --j) {
      result[i].push(arr[j][i])
    }
  }
  return result
}

function check(board, key, keyPoint, lockPoint, lockLen) {
  let result = true
  const newBoard = board.map((v) => v.slice())
  const [keyx, keyy] = keyPoint
  const [lockx, locky] = lockPoint
  key.forEach((row, rowIndex) => {
    row.forEach((value, columnIndex) => {
      newBoard[rowIndex + keyx][columnIndex + keyy] += value
    })
  })
  for (let i = lockx; i < lockx + lockLen; ++i) {
    for (let j = locky; j < locky + lockLen; ++j) {
      if (newBoard[i][j] !== 1) {
        result = false
        break
      }
    }
  }
  return result
}

function solution(key, lock) {
  let answer = false
  const boardLength = key.length * 2 + lock.length - 2
  const lockStart = key.length - 1
  const board = Array.from({ length: boardLength }, () =>
    Array.from({ length: boardLength }, () => 0)
  )
  lock.forEach((row, rowIndex) => {
    row.forEach((value, columnIndex) => {
      board[lockStart + rowIndex][lockStart + columnIndex] = value
    })
  })
  for (let i = 0; i < key.length + lock.length - 1; ++i) {
    for (let j = 0; j < key.length + lock.length - 1; ++j) {
      let rotatedKey = key
      for (let k = 0; k < 4; ++k) {
        const result = check(board, rotatedKey, [i, j], [lockStart, lockStart], lock.length)
        if (result) return true
        rotatedKey = rotate(rotatedKey)
      }
    }
  }

  return answer
}
