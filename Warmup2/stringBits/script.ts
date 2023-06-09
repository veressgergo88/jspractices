function stringBits(str: string):string {
 let result=""

 let i=0
 while(str[i] !== undefined){
  result += str[i]
  i += 2
 }
 return result
}

let result1: string = stringBits("Hello")
let result2: string = stringBits("Hi")
let result3: string = stringBits("Heeololeo")

console.log(result1)
console.log(result2)
console.log(result3)