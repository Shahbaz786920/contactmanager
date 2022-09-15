const express=require('express')
const router=express.Router()
const managerDetails=require('../models/managerDetails')

router.post('/create',async (req,res)=>{
   let data=req.body
   const manager=new managerDetails({
         id:data.id,
         fname:data.fname,
         phone:data.phone,
         email:data.email
})
manager.save().then((result)=>res.send('manager is created'))
.catch((err)=>res.send('manager is not created',err))
})

module.exports=router