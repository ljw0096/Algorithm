function solution(n) {
  let answer = ""
  let tmp = n
  while (tmp !== 0) {
    const rest = tmp % 3
    tmp = Math.floor(tmp / 3)
    if (rest === 0) {
      answer = "4" + answer
      tmp -= 1
    } else if (rest === 1) {
      answer = "1" + answer
    } else {
      answer = "2" + answer
    }
  }

  return answer
}
