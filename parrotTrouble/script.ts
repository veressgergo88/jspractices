function parrotTrouble(talking: boolean, hour: number){
  if (talking === true && (hour < 7 || hour > 20)){
    return true
  }
  else {
    return false
  }
}

let result1: boolean = parrotTrouble(true, 6)
let result2: boolean = parrotTrouble(true, 7)
let result3: boolean = parrotTrouble(false, 6)

console.log(result1)
console.log(result2)
console.log(result3)