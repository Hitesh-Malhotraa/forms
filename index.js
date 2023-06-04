const express=require('express');
const app=express();
const path=require('path');
var myParser = require("body-parser");
 app.use(myParser.urlencoded({extended : true}));
app.set('view engine','ejs');
// app.set('views', path.join(__dirname, '/views'));
// app.();s
const routes=require('./routes/routes');
app.use('/',routes);
app.listen('2323',()=>{
    console.log('app.listen at port 2323');
})
