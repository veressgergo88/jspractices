function icyHot(temp1: number, temp2: number):boolean {
  return temp1 < 0 && temp2 > 100 || temp2 < 0 && temp1 > 100 ? true : false 
}

let result1: boolean = icyHot(120, -1)
let result2: boolean = icyHot(-1, 120)
let result3: boolean = icyHot(2, 120)

console.log(result1)
console.log(result2)
console.log(result3)