// function saymyname(){
//   console.log("i am the danger")
// }

// saymyname()

// function addnumber (number1,number2){
//     return number1 +number2
//   }

// const result = addnumber(23,1)

// console.log("result : ",result)

function login(nameofperson = "person"){
    console.log(`${nameofperson} is logged into the system `)
}

login("devesh")

// The ... symbol is used as both a Rest Operator and a Spread Operator, depending on the context.
// The Rest Operator collects multiple elements into a single array.
// The Spread Operator expands elements of an array or object.
// Difference Between Rest and Spread
/*
| Rest Operator                                  | Spread Operator                               |
| ---------------------------------------------- | --------------------------------------------- |
| Collects multiple values into one array/object | Expands array/object into individual elements |
| Used in function parameters and destructuring  | Used in arrays, objects, and function calls   |
| Packs values                                   | Unpacks values                                |
| Left side of assignment                        | Right side of assignment                      |

*/
function manyobject(...x){
    return x
}
console.log(manyobject(22,222,22222,33333)) // return the single array of these elements 



function objectbazzi(anyobject){
    console.log(`username is ${anyobject.username} and age is ${anyobject.age}`)
}

const bhj1 = {
    username : "abhi",
    age :21
}

objectbazzi(bhj1)

function loginuser(username ="person"){
    console.log(`${username} is logged in`)
}
loginuser("abhi")

fetch ("https://api.github.com/users/hiteshchoudhary")
.then((response) => response.json()).then((data) => {
    console.log( "url : " +data.url)
    console.log("id " + data.id)
    console.log("login" + data.login)
})


