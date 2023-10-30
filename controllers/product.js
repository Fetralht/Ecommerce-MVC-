const adminData=require('../routes/admin.js')
const product=[]
exports.getProduct=(req,res,next)=>{
    res.render('add-product',{docTitle:'Add product',path:'admin/add-product'})
}
exports.postProduct=(req,res,next)=>{
    product.push(req.body)
    res.redirect('/')
 }
exports.getShop=(req,res,next)=>{
    res.render('shop',{prods:product,docTitle:'Shop',path:'/'})
 }
