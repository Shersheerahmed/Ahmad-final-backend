const loginSchema = require ('../modules/login')
const express = require('express')


const router = express.Router()

router.get('/login', async (req,res)=>{
     const rs = await loginSchema.find()
     return res.send(rs)
 })
     router.post('/login', async (req,res)=>{
    
      const rs = await loginSchema.create(req.body)
       return res.send(rs)
})

module.exports = router