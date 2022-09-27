function hasAllGems(mapObject) {
  const values = [...mapObject.values()]
  return values.every((x) => x > 0)
}

function solution(gems) {
  let answer = [0, 0]
  let minimum = 100001
  const gemsMap = new Map(gems.map((v) => [v, 0]))
  let left = 0
  let right = gemsMap.size - 1
  for (let i = 0; i <= right; ++i) {
    gemsMap.set(gems[i], gemsMap.get(gems[i]) + 1)
  }

  while (true) {
    const nowLength = right - left + 1
    if (hasAllGems(gemsMap)) {
      if (nowLength < minimum) {
        answer = [left + 1, right + 1]
        minimum = nowLength
      }
      gemsMap.set(gems[left], gemsMap.get(gems[left]) - 1)
      left += 1
    } else {
      if (right === gems.length - 1) {
        break
      } else {
        right += 1
        gemsMap.set(gems[right], gemsMap.get(gems[right]) + 1)
      }
    }
  }

  return answer
}
