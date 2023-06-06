function delDel(str: string):string{
  let result = "";
  
  let count = 0 
  while (str[count] !== undefined){
    count += 1
  }

    if (count >= 4 && str[1] === "d" && str[2] === "e" && str[3] === "l") {
    result = str[0];
      let i = 4
      while(i < count){
          result += str[i]
        i+=1
      } 
    }
      else {
      result = str;
    }
    
    return result;
  }

let result1: string = delDel("adelbc")
let result2: string = delDel("adelHello")
let result3: string = delDel("abcdel")

console.log(result1)
console.log(result2)
console.log(result3)