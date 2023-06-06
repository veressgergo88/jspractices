function stringTimes(str: string, n:number):string {
  let result = ""

  let count = 1
  while(count <= n ) {
    result += str
    count += 1
  }

  return result
}

let result1: string = stringTimes("Hi", 2)
let result2: string = stringTimes("Hi", 3)
let result3: string = stringTimes("Hi", 1)

console.log(result1)
console.log(result2)
console.log(result3)