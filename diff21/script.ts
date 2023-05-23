function diff21(n: number){
  if (n >= 21) {
    return (n-21)*2
  }
  else {
    return 21-n
  }
}

let result1: number = diff21(19)
let result2: number = diff21(10)
let result3: number = diff21(21)

console.log(result1)
console.log(result2)
console.log(result3)