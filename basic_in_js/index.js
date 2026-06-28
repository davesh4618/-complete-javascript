console.log("hello");
const dosomething =()=>{
  console.log("helloooooo")
}
dosomething()


const person ={
  age : 16 ,
  name : "devesh",
  ismaried : false

}
const {age ,name,ismaried}=person

console.log(age)
console.log(ismaried)

const person2 ={...person,name:"abhi"}

console.log(person);
console.log(person2)


const names =["devesh","abhi","ram"]
names.map((name)=>{
    return console.log(name + "1");
})