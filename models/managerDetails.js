const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/test').then((res)=>console.log
('db connected')).catch((err)=>console.log(err))

const managerDetails=mongoose.model('managerDetails',{
    id:String,
    fname:String,
    phone:String,
    email:String
})

/*const manager=new managerDetails({
    id:"2112443432",
    fname:"Shahbaz",
    phone:"2142342342",
    email:"shahbaz@gmail.com"
})

manager.save().then((res)=>console.log('user is created'))
.catch((err)=>console.log('user is not created',err))*/

module.exports=managerDetails