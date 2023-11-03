const product=require('../models/product')
const adminData=require('../routes/admin.js')
exports.getProduct=(req,res,next)=>{
    res.render('add-product',{docTitle:'Add product',path:'admin/add-product'})
}
exports.postProduct=(req,res,next)=>{
    const products=new product(req.body.title)
    products.save()
    res.redirect('/')
 }
exports.getShop=(req,res,next)=>{
    const productions=product.fetchAll()
    res.render('shop',{prods:productions,docTitle:'Shop',path:'/'})
 }
