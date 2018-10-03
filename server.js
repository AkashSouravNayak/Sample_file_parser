const app = require("express")()
const bodyParser = require("body-parser");
const route = require("./routes/route.js"); 
const port = process.env.PORT || 8000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/api',route);
app.all("*",(err,req,res,next)=>{
    if(err){
        console.error(err);
        res.status(500).json({status:"fail",message:"Unexpected error occured"});
    }
    else{
        console.error("Invalid url");
        res.status(404).json({status:"fail",message:"Invalid url"});
    }
})

app.listen(port,()=>{
    console.log("Application started on port ",port);
})