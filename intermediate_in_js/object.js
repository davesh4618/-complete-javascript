const mykey = Symbol(1)
const obj ={
  name : "davesh",
  age : 22,
  gmail : "devesh@gmail.com",
  no : 8865980361,
  [mykey]: 1
}

console.log(obj["name"])
console.log(typeof obj[mykey]);

obj.greeting= function(){
  console.log(`hello my name is ${this.name}`)
}
console.log(obj.greeting())

const obj1 ={1: "a",2:"b"}
const obj2 ={3: "a",4:"b"}

const obj3 = {...obj1,...obj2}
console.log(obj3);


const user = new Object()
console.log(user)


user.name = "deveshhh"
user.islogedin = true
console.log(user)




const ar1 = [
  {
    id : 1,
    name :"devesh"
  },{
    id : 2,
    name :"devesh2"
  },{
    id : 3,
    name :"devesh3"
  },
]

console.log(ar1[1].name)


const course ={
  coursename: "js cousre",
  price : "999",
  teacher : "devesh"
}
  
const {coursename} = course
console.log(coursename)
console.log(obj3);