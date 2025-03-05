const express=require('express')
const path=require('path')
const router=express.Router()
const adminData=require('./admin')
const controllers=require('../controllers/shop')


router.get('/',controllers.getShop)
router.get('/cart',controllers.getCart)
// router.post('/cart',controllers.postCart)
router.get('/products/:products',controllers.getDetails)
router.get('/products',controllers.getIndex)

module.exports=router