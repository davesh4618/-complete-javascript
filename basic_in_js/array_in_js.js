let array = [12,23,34,45]

console.log(array)

let arr1 = array.slice(12, 34)
console.log("a ", arr1)

let a = [1,2,3,4,5]
a.push(6)
console.log(a)
a.pop()
console.log(a);

a.unshift(6)
console.log(a);
a.shift()
console.log(a)
a.slice(0,2)
console.log(a.slice(0,2));
console.log(a);

a.splice(0,2)
console.log(a)
console.log(a.includes(5));

let evennumber = [2,4,6,8]
let oddnumber = [1,3,5,7]
let mergenumbers = [...evennumber,...oddnumber]
console.log(mergenumbers);
