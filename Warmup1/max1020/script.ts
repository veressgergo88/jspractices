function max1020(a:number, b:number):number{
  if (10 <= a && a <= 20 && 10 <= b && b <= 20) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  } else if (10 <= a && a <= 20) {
    return a;
  } else if (10 <= b && b <= 20) {
    return b;
  } else {
    return 0;
  }
}

let result1: number = max1020(11, 19)
let result2: number = max1020(19, 11)
let result3: number = max1020(11, 9)

console.log(result1)
console.log(result2)
console.log(result3)