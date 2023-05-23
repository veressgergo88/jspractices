function makes10(a: number, b: number){
  if ((a === 10 || b === 10) || (a+b === 10)){
    return true
  }
  else {
    return false
  }
}

let result1: boolean = makes10(9, 10)
let result2: boolean = makes10(9, 9)
let result3: boolean = makes10(1, 9)