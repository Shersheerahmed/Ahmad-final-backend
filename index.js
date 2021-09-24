

const express = require('express')
const mongoose = require('mongoose')
const cors = require ('cors');
const  route  = require('./routes/loginAPI');


const app = express()
const port = 500;
app.use(cors())
const url = 'mongodb+srv://Login:Ahmed123@cluster0.scgxk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

app.listen(process.env.PORT || port,() =>{
    console.log("server is now listenig at port 500")

app.use(express.json())
app.use('/api',route)
mongoose.connect(url)
.then(function (){
    console.log(" connected to database")
})
.catch(function(error){
    console.log(error)
})
})