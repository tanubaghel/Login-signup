const express = require('express');
const router =express.Router();
const Student = require('../model/student');
const mongoose = require('mongoose');
const checkAuth = require('../middleware/check-auth');
router.get('/',checkAuth,(req,res,next)=>{
   Student.find()
   .then(result=>{
    res.status(200).json({
        studentData:result
    })
   })
   .catch(err=>{
    console.log(err);
    res.status(500).json({
        error:err
    })
   })
})
router.get('/:id',checkAuth,(req,res,next)=>{
   console.log(req.params.id);
   Student.findById(req.params.id).
   then(result=>{
    res.status(200).json({
        studentData:result
    })
   })
   .catch(err=>{
    res.status(500).json({
        error:err
    })
   })
})
router.post('/',checkAuth,(req,res,next)=>{
    const student = new Student({
    _id: new mongoose.Types.ObjectId,
    name:req.body.name,
    email:req.body.email,
    phone:req.body.phone,
    gender:req.body.gender
    })
    student.save()
    .then(result=>{
        console.log(result)
        res.status(200).
        json({
            newStudent:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })

 })
 //delete request
 router.delete('/:id',checkAuth,(req,res,next)=>{
   Student.deleteOne({_id:req.params.id}).
    then(result=>{
     res.status(200).json({
         message:'Student data deleted',
         result:result
     })
    })
    .catch(err=>{
     res.status(500).json({
         error:err
     })
    })
 })
//put request
router.put('/:id',checkAuth,(req,res,next)=>{
    Student.findOneAndUpdate({_id:req.params.id},{
        $set:{
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            gender:req.body.gender
        }
    }).then(result=>{
     res.status(200).json({
         result:result
     })
    }).catch(err=>{
        res.status(500).json({
            error:err
        })
})
})
module.exports = router;