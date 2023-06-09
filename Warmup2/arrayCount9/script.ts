function arrayCount9(nums: number[]):number {
  let count = 0
  let i = 0
  while (nums[i] !== undefined) {
    if(nums[i] === 9){
      count += 1
    }
    i += 1
  }
  return count
}

let result1: number = arrayCount9([1, 2, 9])
let result2: number = arrayCount9([1, 9, 9])
let result3: number = arrayCount9([1, 9, 9, 3, 9])

console.log(result1)
console.log(result2)
console.log(result3)