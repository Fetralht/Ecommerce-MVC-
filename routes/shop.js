const express=require('express')
const path=require('path')
const router=express.Router()
const adminData=require('./admin')
const controllers=require('../controllers/product')


router.get('/',controllers.getShop)

 module.exports=router