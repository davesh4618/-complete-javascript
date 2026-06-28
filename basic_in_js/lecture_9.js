// primitive : string ,number ,Bigint , boolean , null ,undefined , symbol

// reference-type (non-primitive): array , object , function

let arr = [ 12 ,34,"a"]

let obj = {
  name : "davesh",
  age : 21,
  gender : "male"
}

console.log(typeof(arr))


let obj1 = obj

obj1.name ="khushi";
console.log(obj)
console.log(obj1)
