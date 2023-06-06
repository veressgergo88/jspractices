function startHi(str:string):boolean{
  return str[0] === "h" && str[1] === "i" ? true : false
}

let result1: boolean = startHi('hi there') 
let result2: boolean = startHi('hi')
let result3: boolean = startHi('hello hi')

console.log(result1)
console.log(result2)
console.log(result3)

