function loneTeen(a: number, b: number):boolean{
  return (a <= 19 && a >= 13) && !(b <= 19 && b >= 13) || !(a <= 19 && a >= 13) && (b <= 19 && b >= 13)  ? true : false
}

let result1: boolean = loneTeen(13, 99)
let result2: boolean = loneTeen(21, 19)
let result3: boolean = loneTeen(13, 13)

console.log(result1)
console.log(result2)
console.log(result3)