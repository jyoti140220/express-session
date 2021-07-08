const express=require('express')
const session=require('express-session')
var app=express()
app.use(session({secret:"x45jj49)DTU)Z<tT"}))

app.get('/session_test',(req,res)=>{
    if (req.session.count){
        req.session.count++;
        res.send("count : "+req.session.count)
    }else{
        req.session.count=1
        res.send("welcome first time count : "+req.session.count)
    }
})




app.listen(5000,()=>{
    console.log("SERVER RUNNING...");
})

