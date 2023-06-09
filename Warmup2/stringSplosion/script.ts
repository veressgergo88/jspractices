function stringSplosion(str: string):string {
    return str[0]+str[0]+str[1]+str[0]+str[1]+str[2]+str[0]+str[1]+str[2]+str[3]
}

let result1: string = stringSplosion("Code") //"CCoCodCode".


console.log(result1)
