const express=require('express')
const app=express()
const cookieparser=require('cookie-parser')
app.use(cookieparser())

app.get('/create_cookies',(req,res)=>{
    res.cookie('name','jyoti');
    res.cookie('sec_name','bhandari')
    res.send("set")
})
app.get('/show_cookies',(req,res)=>{
    res.send(req.cookies)
    console.log(req.cookies);

})
app.listen(9200,()=>console.log('running...'))