function startOz(str: string): string {
  let result = '';

  let count = 0
  while(str[count] !== undefined){
    count += 1
  }

  if (count >= 1 && str[0] === 'o') {
    result += str[0];
  }
  if (count >= 2 && str[1] === 'z') {
    result += str[1];
  }

  return result;
}

let result1: string = startOz("ozymandias")
let result2: string = startOz("bzoo")
let result3: string = startOz("oxx")

console.log(result1)
console.log(result2)
console.log(result3)