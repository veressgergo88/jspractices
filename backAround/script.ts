function backAround(str:string):string{
  let result=""
  let firstChar = ""
  let lastChar = ""
  
  let i=0
  while(str[i] !== undefined){
      firstChar = str[i]
      i += 1
  }

  lastChar = firstChar

  return result = firstChar + str + lastChar
}


let result1: string = backAround("cat")
let result2: string = backAround("Hello")
let result3: string = backAround("a")

console.log(result1)
console.log(result2)
console.log(result3)