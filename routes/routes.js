const express=require('express');
const routes=express.Router();
routes.get('/',(req,res)=>{
    res.render('loginform');
})
routes.post('/login',(req,res)=>{
    console.log('hello');
    const {email,password}=req.body;
    console.log(email,password);
    res.send("hey");
})
routes.post('/logged',(req,res)=>{
    res.send("hell");
})
module.exports=routes;