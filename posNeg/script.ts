function posNeg(a: number, b: number, negative: boolean):boolean {
  if (negative) {
    return a < 0 && b < 0;
  } else {
    return (a < 0 && b > 0) || (a > 0 && b < 0);
  }
}
  
let result1: boolean = posNeg(1, -1, false)
let result2: boolean = posNeg(-1, 1, false)
let result3: boolean = posNeg(-4, -5, true)
  
console.log(result1)
console.log(result2)
console.log(result3)