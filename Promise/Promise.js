// promiseone
// const promiseone = new Promise(function(resolve,reject){
//   setTimeout(()=>{
//     console.log(`helllooooo settimeout function `)
//     resolve()
//     reject()
//   },2000)
// })

// promiseone.then(()=>{
//   console.log("task done")
// })

// promisetwo
// new Promise(function(resolve,reject){
//   setTimeout(() => {
//     console.log('second promise');
//     resolve()
//   }, 5000);
// }).then(function(){
//   console.log('second promise is approved');
  
// })


// promisethird

// const promisethird = new Promise(function(resolve , reject){
//   setTimeout(() => {
//     resolve({username : 'devesh', age : 23})
//   }, 1000);
// })
// promisethird.then(function(username){
//   console.log(username)
// })

// promiseforth 
//  const promiseforth = new Promise(function(resolve,reject) {
//    setTimeout(()=>{
//     let error = true
//     if(!error){
//       resolve({username : 'devesh', age : 23})
//     }else{
//       reject('error something went wrong')
//     }
//    },2000)
//  })

//  promiseforth.then((user)=>{
//   console.log(user)
//   return user.age
//  }).then((userage)=>{
//   console.log(userage)
//  }).catch(function(error){
//   console.log(error)
//  })

// const promisefifth = new Promise(function(resolve,reject) {
//    setTimeout(()=>{
//     let error = true
//     if(!error){
//       resolve({username : 'devesh', age : 23})
//     }else{
//       reject('error something went wrong')
//     }
//    },2000)
//  })

//  async function consumefifth() {
//  try {
//   const response = await promisefifth
//  console.log(response);
//  } catch (error) {
//   console.log(error);
  
//  }
 
//  }
//  consumefifth()
 

// async function getalluser(){
//  try {
//   const response =  await fetch('https://randomuser.me/api/')
//   const data = await response.json()

//   console.log(data.results[0].name.title)
//  } catch (error) {
//   console.log('E', error);
  
//  }

// }
// getalluser()


// fetch('https://randomuser.me/api/')
// .then((value)=>{
//  return value.json()
// })
// .then((data)=>{
//   return data.results[0]
  
// }).then((result)=>{
//   console.log(result.gender)
// })
// .catch((error)=>{
//   console.log('E' ,error);
  
// })

// revision of the promise and then  , catch , finally

// const promiseone = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     console.log("hello settime out run")
//     resolve()
//   },4000)
// })

// promiseone.then((x)=>{
//   console.log("promiseone is fullfilled" , x);
  
// })



// const promisetwo  = new Promise((resolve , reject)=>{
//   setTimeout(()=>{
//     console.log("hello world")
//     let error = false
//     if (!error){
//       resolve({"username" : "devesh singh rathor" ,"email": "devesh@gmail.com"})
//     }else{
//       reject('error something went wrong')
//     }
    
//   },3000)
// })

// promisetwo
// .then((x)=>{
// console.log(x);
// return x.username

// }).then((x1)=>{
//   console.log(x1);
  
// }).catch((err)=>{
//   console.log(err)
// })
// .finally(()=>{
//   console.log("yo yo yo yo");
// })


// const promisefive  = new Promise((resolve,reject)=>{
//  setTimeout(()=>{
//    let error = true
//   if (!error){
//     resolve({"language" : "javascript","password" : 21})
//   }else{
//     reject("promise is rejected")
//   }
//  },2000)
// })

// async function promiseconsume() {
// try{
//     const response = await promisefive
//   console.log(response);
// }catch(err){
//   console.log(err);
  
// }
  
// }
// promiseconsume()



// async function getalluser(params) {
//   try {
//      const response = await fetch('https://jsonplaceholder.typicode.com/users')
//       let data = await response.json()
//       console.log(data);
      
//   } catch (error) {
//     console.log(error);
    
//   }
// }

// getalluser()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
  return response.json()
})
.then((data)=>{
  console.log(data);
  
})