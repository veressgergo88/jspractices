function hasTeen(a: number, b: number, c:number):boolean{
  return a <= 19 && a >= 13 || b <= 19 && b >= 13 || c <= 19 && c >= 13 ? true : false
}

let result1: boolean = hasTeen(13, 20, 10)
let result2: boolean = hasTeen(20, 19, 10)
let result3: boolean = hasTeen(20, 10, 13)

console.log(result1)
console.log(result2)
console.log(result3)