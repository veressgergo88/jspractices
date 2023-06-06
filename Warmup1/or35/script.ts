function or35(n:number):boolean{
  if(n%3 === 0 || n%5 === 0){
    return true
  }
  else {
    return false
  }
}


let result1: boolean = or35(3)
let result2: boolean = or35(10)
let result3: boolean = or35(8)

console.log(result1)
console.log(result2)
console.log(result3)