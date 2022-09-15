const express=require('express')
const router=express.Router()
const managerDetails=require('../models/managerDetails')

router.post('/delete/:fname',async (req,res)=>{
    const ip_fname=req.params.fname
    try{
        const result=await managerDetails.findOneAndDelete({fname:ip_fname})
        console.log(result)
        res.send('user is deleted')
    }
    catch(e){
        res.send('some error occured')
    }
})

module.exports=router