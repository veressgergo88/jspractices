function sumDouble(a: number, b: number){
  if (a === b || b === a){
    return (a+b)*2
  }
  else {
    return a+b
  }
}

let result1: number = sumDouble(1, 2)
let result2: number = sumDouble(3, 2)
let result3: number = sumDouble(2, 2)

console.log(result1)
console.log(result2)
console.log(result3)