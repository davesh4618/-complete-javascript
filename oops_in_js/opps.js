// object literals


const user  = {
    username : 'devesh',
    email : 'devesh@example.com',
    pno : 1234567890,
    name  : function(){
      console.log(`username  hai : `, this.username

      )
    }
}

console.log(user.name())



