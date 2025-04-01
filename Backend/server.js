const express=require('express')
const app=express()
const mongoose=require('mongoose')
const PORT=process.env.PORT || 5000
require('dotenv').config()



app.use(express.json())


mongoose.connect(process.env.MONGO_URI).then(()=>console.log('Connected to Mongodb')).catch(e=>console.log('Not Connected',e))





app.listen(PORT,()=>{

    console.log(`Server is running on the port ${PORT}`);
    
})

