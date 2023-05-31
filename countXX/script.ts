function countXX(str: string):number {
  let count = 0

  let index = 0
  while (str[index] !== undefined) {
    if (str[index] + str[index+1] == "xx") {
      count += 1
    }
    index += 1
  }

  return count
}

let result1: number = countXX("abcxx")
let result2: number = countXX("xxx")
let result3: number = countXX("xxxx")

console.log(result1)
console.log(result2)
console.log(result3)