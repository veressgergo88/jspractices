function nearHundred(n: number){
  let underHundred = 100-10
  let upperHundred = 100+10
  let underTwoHundred = 200-10
  let upperTwoHundred = 200+10
    if ((n >= underHundred && n <= upperHundred) || (n >= underTwoHundred && n <= upperTwoHundred)){
        return true
    }
    else {
        return false
    }
}

let result1: boolean = nearHundred(93)
let result2: boolean = nearHundred(90)
let result3: boolean = nearHundred(89)

console.log(result1)
console.log(result2)
console.log(result3)