const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const bcrypt=require("bcryptjs")
const {usermodel}=require("./models/register")

const app=express()
app.use(cors())
app.use(express.json())

const generateHashedpassword=async(password)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(password,salt)
  }
mongoose.connect("mongodb+srv://bhagya:bhagya20@cluster0.gszky.mongodb.net/busdb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/reg",async(req,res)=>{
    let input=req.body
    let hashedPassword=await generateHashedpassword(input.password)
    console.log(hashedPassword)
    input.password=hashedPassword
    let register=new usermodel(input)
   
    register.save()
    res.json({"status":"success"})
})


app.listen(8080,()=>{
    console.log("server started")
})