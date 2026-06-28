// filter

const arr = [1,2,3,4,5,6,7,8,9,10]

const arrr1 = arr.filter((items)=>{
  return items>4
})
console.log(arrr1);

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const booksneeded = books.filter((bkl)=> {
  return bkl.genre === "Science"
})

const userbooks = books.filter((bkl)=>{
  return  bkl.edition >= 2006 && bkl.publish >= 1999
})

console.log(userbooks);

// console.log(booksneeded)



// ++++++++++++++map++++++++++++++

const num =[ 1,2,4,5,6,7,8,9]

//  const newnum = num.map((xyz)=>{ return xyz*10})
//  console.log(newnum);
 
// ++++++++++++chaining++++++++++

 const mynum = num.map((xyz)=>{return xyz *10}).map((xyz)=>{return xyz+1}).filter((xyz)=>{return xyz>=70})
 console.log(mynum ,"yo");
              


// +++++++++++++reduce+++++++++++

const array1 = [1,2,3,4]
const array2 = array1.reduce((accumulator,currentvalue)=>{
 return accumulator + currentvalue
},0)

console.log(array2);


const tr = "create a new element in DOM"
console.log(tr.replaceAll(" ","_"));
