function endUp(str:string):string{
    let i = 0
    let strLength = 0
    while(str[i] !== undefined){
        strLength += 1
        i+=1
    }
 
    let charsCount = strLength - 3

    let wordFirstPart = ""
    let y = 0
    while(str[y] !== str[charsCount]){
        wordFirstPart += str[y]
        y += 1
    }

    let wordSecondPart = ""
    while(str[charsCount] !== undefined){
        wordSecondPart += str[charsCount]
        charsCount += 1
    }

    if(strLength < 3){
        return str.toUpperCase()
    }
    else{
    return wordFirstPart + wordSecondPart.toUpperCase()
    }
}


let result1: string = endUp("Hello")
let result2: string = endUp("hi there")
let result3: string = endUp("hi")

console.log(result1)
console.log(result2)
console.log(result3)