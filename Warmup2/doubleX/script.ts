function doubleX(str: string):boolean {
  let i=0
while(str[i] !== undefined){
    if(str[i] === "x"){
      if(str[i+1] === "x"){
        return true
      }
      else{
        return false
      }
    }
    else {
      i += 1
    }
  }
  return false
}

let result1: boolean = doubleX("axxbb")
let result2: boolean = doubleX("axaxax")
let result3: boolean = doubleX("xxxxx")

console.log(result1)
console.log(result2)
console.log(result3)