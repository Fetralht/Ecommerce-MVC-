const express=require('express')
const path=require('path')
const router=express.Router()
const controllers=require('../controllers/admin')

// /admin/add-product=>GET
router.get('/add-product',controllers.getProduct)
// /admin/add-product=>POST
router.post('/add-product',controllers.postProduct)
// /admin/admin-product=>GET
router.get('/admin-product',controllers.getAdminProduct)
exports.router=router

