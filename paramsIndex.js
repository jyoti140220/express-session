const express=require('express')
const app=express()
app.use(express.json())


app.get('/as/:id',(req,res)=>{
    var bodydata=req.body
    var data=bodydata.filter(result=>{
        if(req.params.id==result.id){
            return result
        }
        
    })
    if(data.length==1){
        res.send(data[0])
    }else{
        res.send("not found")
    }
    
})

app.listen(4060,()=>{
    console.log("server runing......");
})









