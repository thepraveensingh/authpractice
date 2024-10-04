const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
app.use(cookieParser());
//// encrypt
// app.get('/',(req,res)=>{
//    bcrypt.genSalt(10,(err,salt)=>{
//     bcrypt.hash("pswrd",salt,(err,hash)=>{
//       console.log(hash);
      
//     })
//    });
//    res.send("working");
// })

//decrypt

// app.get('/',(req,res)=>{
//   console.log("hi");
//   bcrypt.compare('pswrd',"$2b$10$H4GRa.RI1D32oGBk3lTsZ.jeS74j5Tmy6eNCIzCQLhKHi2h3qzexO",(err,result)=>{
//     console.log(result);
//   }) 
// })


app.get('/',(req,res)=>{
  let token = jwt.sign({email:"praveens@gmail.com"},"secret");
  res.cookie("token",token)
  console.log(token);
  res.send("done");
})
app.get('/read',(req,res)=>{
  let data = jwt.verify(req.cookies.token,"secret");
  console.log(data);
  
})
app.listen(3000,()=>{
  console.log("server at 3000");
  
});