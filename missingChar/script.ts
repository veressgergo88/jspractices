function missingChar(str: string, n:number ): string {
  let result=""

  let index = 0
  while (str[index] !== undefined){
    if (index !== n) {
      result += str[index]
    }
    index += 1
  }
  return result
}

let result1: string = missingChar("kitten", 1)
let result2: string = missingChar("kitten", 0)
let result3: string = missingChar("kitten", 4)

console.log(result1)
console.log(result2)
console.log(result3)