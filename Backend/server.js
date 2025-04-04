const express=require('express')
const app=express()
const mongoose=require('mongoose')
const PORT=process.env.PORT || 5000
require('dotenv').config()
const cors=require('cors')


const userroutes=require('./Routes/Userroutes')
const equipmentroutes=require('./Routes/Equipmentroutes')

app.use(cors())
app.use(express.json())


mongoose.connect(process.env.MONGO_URI).then(()=>console.log('Connected to Mongodb')).catch(e=>console.log('Not Connected',e))


app.use('/api',userroutes)
app.use('/api',equipmentroutes)




app.get("/", (req, res) => {
    res.send("Welcome to the Agricultural Equipment Rental System API!");
  });





app.listen(PORT,()=>{

    console.log(`Server is running on the port ${PORT}`);
    
})



