function intMax(a:number, b:number, c:number):number {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

let result1: number = intMax(1, 2, 3)
let result2: number = intMax(1, 3, 2)
let result3: number = intMax(3, 2, 1)

console.log(result1)
console.log(result2)
console.log(result3)