const express=require('express');
const app=express();
const loginRout=require('./router/login')
const messageRout=require('./router/message')
const body_parser=require('body-parser');
app.use(body_parser.urlencoded({extended:false}))


app.use(loginRout);
app.use(messageRout);

app.listen(3000,()=>{
    console.log('App is listening in the port nunber 3000 ')
})