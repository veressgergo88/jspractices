function sleepIn(weekday:boolean, vacation:boolean){
  if (weekday === true && vacation === false){
    return false
  }
  else {
    return true
  }
}

let resultOne: boolean = sleepIn(true, true) 
let resultTwo: boolean = sleepIn(true, false)
let resultThree: boolean = sleepIn(false, true)

console.log(resultOne)
console.log(resultTwo)
console.log(resultThree)

