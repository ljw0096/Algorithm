function setValue(key, mapObject) {
  if (mapObject.has(key)) {
    mapObject.set(key, mapObject.get(key) + 1)
  } else {
    mapObject.set(key, 1)
  }
  return mapObject
}

function reduceValue(key, mapObject) {
  if (mapObject.get(key) === 1) {
    mapObject.delete(key)
  } else {
    mapObject.set(key, mapObject.get(key) - 1)
  }
  return mapObject
}

function solution(gems) {
  let answer = [0, 0]
  let minimum = 100001
  const gemsMap = new Map()
  const allGemsCnt = new Set(gems).size
  let left = 0
  let right = gemsMap.size - 1
  for (let i = 0; i <= right; ++i) {
    setValue(gems[i], gemsMap)
  }

  while (true) {
    const nowLength = right - left + 1
    if (gemsMap.size === allGemsCnt) {
      if (nowLength < minimum) {
        answer = [left + 1, right + 1]
        minimum = nowLength
      }
      reduceValue(gems[left], gemsMap)
      left += 1
    } else {
      if (right === gems.length - 1) {
        break
      } else {
        right += 1
        setValue(gems[right], gemsMap)
      }
    }
  }

  return answer
}
