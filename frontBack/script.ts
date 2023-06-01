function frontBack(str:string):string{ 
  if (!str[1]) {
    return str
  }
  let middleOfWord = ""

  let firstChar = str[0]
  let lastChar

  let index = 1
  while (str[index] !== undefined) {

    if (str[index+1] !== undefined) {
      middleOfWord += str[index]
    } else {
      lastChar = str[index]
    }
    
    index = index + 1
  }

  return lastChar + middleOfWord + firstChar
}


let result1: string = frontBack("code")
let result2: string = frontBack("a")
let result3: string = frontBack("ab")

console.log(result1)
console.log(result2)
console.log(result3)