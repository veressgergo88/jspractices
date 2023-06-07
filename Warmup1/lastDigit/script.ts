function lastDigit(a: number, b:number):boolean {
  let aLastDigit = a % 10
  let bLastDigit = b % 10
  return aLastDigit === bLastDigit
}

let result1: boolean = lastDigit(7, 17)
let result2: boolean = lastDigit(6, 17)
let result3: boolean = lastDigit(3, 113)

console.log(result1)
console.log(result2)
console.log(result3)