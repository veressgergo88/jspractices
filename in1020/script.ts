function in1020(a: number, b: number):boolean{
  return a >= 10 && a <= 20 || b >= 10 && b <= 20 ? true : false
}

let result1: boolean = in1020(12, 99)
let result2: boolean = in1020(21, 12)
let result3: boolean = in1020(8, 99)

console.log(result1)
console.log(result2)
console.log(result3)