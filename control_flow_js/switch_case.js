const months = 3

switch (months) {
  case 1:
    console.log("jan")
    break;
    case 2:
        console.log("feb")
    break;
    case 3:
        console.log("march")
    break;
    case 4:
        console.log("april")
    break;

  default:
    console.log("kuch bhi")
    break;
}


(()=>{
  console.log("hello")
})();

const obj =[]

if(Object.keys(obj).length== 0){
  console.log("object is empty");
  
}

const a = null
const b = "abhi"

let result = a ?? b
console.log(result)