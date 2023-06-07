function stringE(str:string):boolean{
  
  let i=0
  let count =  0
  while(str[i] !== undefined){
    if(str[i] === "e"){
      count += 1
    }
    i += 1
  }

 return  count >= 1 && count <= 3 ? true:false

}

let result1: boolean = stringE("Hello")
let result2: boolean = stringE("Heelle")
let result3: boolean = stringE("Heelele")

console.log(result1)
console.log(result2)
console.log(result3)