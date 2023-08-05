const express = require('express');
const cors =require('cors');
const app = express();
const studentRoute = require('./api/routes/student');
const userRoute = require('./api/routes/user');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const{urlencoded,json} = require('body-parser');
app.use(cors());
mongoose.connect('mongodb+srv://root:root@cluster0.isf6lll.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.on('error',err=>{
    console.log('connection hell')
});
mongoose.connection.on('connected',connected=>{
    console.log('Connected with database');
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



app.use('/student',studentRoute)
app.use('/user',userRoute);
// app.use((req,res,next)=>{
//     res.status(404).json({
//         error:'bad request'
//     })
// })
app.get('*',(req,res,next)=>{
    res.status(500).json({
        message:'bad requesttt'
    })
})

module.exports =app;