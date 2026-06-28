// for of loops

// const str = "High_Order_Array_loops"

// for (const st of str) {
//   console.log(`each char of str is ${st}`);
  
// }

// map

const map1 = new Map

map1.set("in" , "india")
map1.set("pak" , "pakistan")
map1.set("fr", "france")

for (const key in map1) {
  
  console.log(key);
  // map can not be iterate using for in loop
}
// console.log(map1);

// for (const [key ,value] of map1) {
//   console.log(key ,value);
  
// }


// for in loops

const obj = {
  js : "javascript",
  cpp : "c++",
  rb : "ruby"
}

// for (const key in obj) {
//    console.log(key,obj[key]);
// }


// foreach loop


const arrr =[1,2,3,5,6666,7777,88888,9999999999]

// arrr.forEach((val)=>{
//   console.log(val)
  
// })

// function print(item){
//   console.log(item);
  
// }
// arrr.forEach(print)

arrr.forEach((val,index,list)=>{
    // console.log(val,index,list);
})

const loveScripts = [
  {
    language: "JavaScript",
    style: "Modern",
    code: "() => 'I love you'",
    rating: 10
  },
  {
    language: "Python",
    style: "Clean",
    code: "print('I love you')",
    rating: 9
  },
  {
    language: "CSS",
    style: "Visual",
    code: "heart { color: red; }",
    rating: 8
  }
];

loveScripts.forEach((items)=>{
  console.log(items.language);
  console.log(items.rating);
})


