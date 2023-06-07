function in3050(a: number, b: number):boolean{
  return (a >= 30 && a <= 40 && b >= 30 && b <= 40) || (a >= 40 && a <= 50 && b >= 40 && b <= 50)? true : false
}

let result1: boolean = in3050(30, 31)
let result2: boolean = in3050(30, 41)
let result3: boolean = in3050(40, 50)

console.log(result1)
console.log(result2)
console.log(result3)