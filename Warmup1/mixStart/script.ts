function mixStart(str: string):boolean {
  let count = 0 
  while (str[count] !== undefined){
    count += 1
  }
  
  if(3 <= count && str[1] === "i" && str[2] === "x") 
  {return true
  } 
  else {
    return false
  }    
}

let result1: boolean = mixStart("mix snacks")
let result2: boolean = mixStart("pix snacks")
let result3: boolean = mixStart("piz snacks")

console.log(result1)
console.log(result2)
console.log(result3)