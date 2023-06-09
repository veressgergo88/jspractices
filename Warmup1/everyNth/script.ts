function everyNth(str:string, n:number):string{
  let result = ""
  
  let i = 0
  while(str[i] !== undefined){
    result += str[i]
    i += n
  }
  return result
}


let result1: string = everyNth("Miracle", 2)
let result2: string = everyNth("abcdefg", 2)
let result3: string = everyNth("abcdefg", 3)

console.log(result1)
console.log(result2)
console.log(result3)