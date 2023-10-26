const express=require('express')
const path=require('path')
const router=express.Router()
const product=[]
// /admin/add-product=>GET
router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
})
// /admin/add-product=>POST
router.post('/add-product',(req,res,next)=>{
    product.push(req.body)
    res.redirect('/')
 })
exports.router=router
exports.product=product
