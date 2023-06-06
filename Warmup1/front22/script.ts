function front22(str:string):string{ 
  let first2Char =""
  let result=""
  
  if (str === ""){
    result = ""
  }
  else if(str[1] === undefined) {
    first2Char = str[0]
    result = first2Char + str + first2Char
  }
  else {
    first2Char = str[0] + str[1]
    result = first2Char + str + first2Char
  }
  return result 
}


let result1: string = front22("kitten")
let result2: string = front22("Ha")
let result3: string = front22("abc")

console.log(result1)
console.log(result2)
console.log(result3)