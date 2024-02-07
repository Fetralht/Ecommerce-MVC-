
const { render } = require('pug')
const productions=require('../models/product.js')
const cartProduct=require('../models/cart.js')
const adminData=require('../routes/admin.js')

exports.getShop=(req,res,next)=>{
   
   productions.fetchAll(products=>{
   
    res.render('shop/product-list',{
        prods:products,
        docTitle:'Shop',
        path:'/'})
   })
    
 }
exports.getCart=(req,res,next)=>{
   res.render('shop/cart',{
       docTitle:'add cart',
       path:'/cart'})
      }
exports.postCart=(req,res,next)=>{
    
    const prodId=req.body.productId
    //(productions.findbyId(prodId))
   
   cartProduct.addProduct(prodId,(productions.findbyId(prodId)))
    res.redirect('/')

}
exports.getChekout=(req,res,next)=>{
  res.render('shop/chekout',{
  docTitle:'chekout',
  path:'/chekout'})
      }
exports.getDetails=(req,res,next)=>{
    const prodId=req.params.products
    console.log(prodId)
    productions.findbyId(prodId)
    res.render('shop/product-detail',{docTitle:product.title,path:'/products'})
    }
exports.getIndex=(req,res,next)=>{
    productions.fetchAll(products=>{
        res.render('shop/index',{
            prods:products,
            docTitle:'products',
            path:'/products'})
       })
    }
                           