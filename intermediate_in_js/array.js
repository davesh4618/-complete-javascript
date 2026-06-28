const arr =[ 1,2,3,4,5]
// arr.push(6)
// console.log(arr)
// arr.pop()
// console.log(arr)
// console.log(arr.includes(5))
// console.log(arr.indexOf(95))

// console.log("A" ,arr)
// console.log(arr.slice(1,3))

// console.log("b" ,arr)
// console.log(arr.splice(1,3))
// console.log("C" ,arr)


const num = ["eleven" , "ten" , "nine" , "two"]
const alphabet = ["aaaa" ,"bbbb", "cccc" ,"dddd"]

// const merge = num.concat(alphabet)

const merge1 = [...alphabet,...arr,...num]
console.log(merge1)

const rando = [1,11,3,4,[34,55,555] , 344, [33,22]]
const useable_arr = rando.flat(Infinity)
console.log(useable_arr);


console.log(Array.isArray("abhi"))
console.log(Array.from("abhi"))

const a =10 ;
const b =9;
const c =11;
console.log(Array.of(a,b,c))