function close10(a:number, b:number):number{
  let aSub = 0
  let bSub = 0
 
  a > 10 ? aSub = a - 10 : aSub = 10 - a
  b > 10 ? bSub = b - 10 : bSub = 10 - b

  return aSub < bSub ? a
          : bSub < aSub ? b
          : 0
}

let result1: number = close10(8, 12)
let result2: number = close10(13, 8)
let result3: number = close10(13, 7)

console.log(result1)
console.log(result2)
console.log(result3)