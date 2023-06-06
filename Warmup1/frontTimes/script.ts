function frontTimes(str: string, n:number):string {
  let front = str[2] === undefined ?
  str :
  str[0] + str[1] + str[2]

  let result= ""

  let count = 1
  while(count <= n ) {
    result += front
    count += 1
  }

  return result
}

let result1: string = frontTimes("Chocolate", 2)
let result2: string = frontTimes("Chocolate", 3)
let result3: string = frontTimes("Abc", 1)

console.log(result1)
console.log(result2)
console.log(result3)