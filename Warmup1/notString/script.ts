function notString(str: string): string{
  let result = "";
  
  if (str.length >= 3 && str[0] === 'n' && str[1] === 'o' && str[2] === 't') {
    result = str;
  } else {
    result = "not " + str;
  }
  
  return result;
}
  
let result1: string = notString('candy')
let result2: string = notString('x')
let result3: string = notString('not bad')
  
console.log(result1)
console.log(result2)
console.log(result3)