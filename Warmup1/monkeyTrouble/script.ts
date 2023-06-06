function monkeyTrouble(aSmile: boolean, bSmile: boolean){
    if ((aSmile === true && bSmile === false) || (aSmile === false && bSmile === true) ){
        return false
    }
    else {
        return true
    }  
}

let result1: boolean = monkeyTrouble(true, true)
let result2: boolean = monkeyTrouble(false, false)
let result3: boolean = monkeyTrouble(true, false)

console.log(result1)
console.log(result2)
console.log(result3)