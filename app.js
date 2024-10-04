const express = require('express');
const app = express();
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
const userModel = require('./models/user')

app.set("view engine","ejs")
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')));

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

////json web token
// app.get('/',(req,res)=>{
//   let token = jwt.sign({email:"praveens@gmail.com"},"secret");
//   res.cookie("token",token)
//   console.log(token);
//   res.send("done");
// })
// app.get('/read',(req,res)=>{
//   let data = jwt.verify(req.cookies.token,"secret");
//   console.log(data);
// })
app.get('/',(req,res)=>{
  res.render('index');
})
app.post('/create',async(req,res)=>{
  let{username, email , password,age} = req.body;
  let createdUser = await userModel.create({
    username,
    email,
    password,
    age
  })
  res.send(createdUser);
})
app.listen(3000,()=>{
  console.log("server at 3000");
});

////flow
//create user account
//mongoose
//schema
//model
//usercreate -> password -> hash
//jwt token ->cookie
//login -> token -> decrypt -> email