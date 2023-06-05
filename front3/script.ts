function front3(str:string):string{
  let result = "" 
  
  let i=0
  while(str[i] !== undefined){
    if(i < 3) {
      result = str
    }
    else {
      result = str[0]+str[1]+str[2]
    }
    i+=1
  }
  
  return result+result+result
}


let result1: string = front3("Java")
let result2: string = front3("Chocolate")
let result3: string = front3("abc")

console.log(result1)
console.log(result2)
console.log(result3)