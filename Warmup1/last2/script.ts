function last2(str: string):number {
  if (str[2] === undefined) {
    return 0
  }
  let length = 0
  while (str[length] !== undefined) {
    length = length + 1
  }
  let lastTwo = str[length-2] + str[length-1]

  let count= 0  
  let index = 0
  while (str[index+2] !== undefined) {
    if (str[index] + str[index+1] === lastTwo) {
      count += 1
    }
    index = index + 1
  }
  return count
}

let result1: number = last2("hixxhi")
let result2: number = last2("xaxxaxaxx")
let result3: number = last2("axxaaxx")

console.log(result1)
console.log(result2)
console.log(result3)