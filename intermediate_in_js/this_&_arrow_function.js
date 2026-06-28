const ab = {
  name :"abhi",
  age :24,
  price : 222,
  hell : function(){
    console.log(`${this.name} is the name`)
  }
}
ab.name = "devesh"
ab.hell() 

const add = (num1,num2)=>(num1 +num2)

console.log(add(3,1));


function stringconverter (str){
   let y = str.replaceAll(" " ,"_")
  console.log(y);
  
}
stringconverter("Edit and remove elements")