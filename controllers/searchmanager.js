const express=require('express')
const router=express.Router()
const managerDetails=require('../models/managerDetails')

router.post('/search/:fname',async (req,res)=>{
    const ip_fname=req.params.fname
    try{
        const result=await managerDetails.find({fname:ip_fname})
        res.send(result)
    }
    catch(e){
        res.send('some error occured')
    }
})
router.get('/getall',async (req,res)=>{
    try{
        const result=await managerDetails.find({})
        res.send(result)
    }
    catch(e){
        res.send('some error occured')
    }
})

module.exports=router