const productions=require('../models/product.js')

exports.getProduct=(req,res,next)=>{
    res.render('admin/add-product',{
        docTitle:'Add product',
        path:'admin/add-product'})
}
exports.postProduct=(req,res,next)=>{
    const products=new productions(
        req.body.title,
        req.body.imageURL,
        req.body.price,
        req.body.description)
     if(req.body.title==''){
        console.log('not saved data')
        res.render('admin/cancel',{
            docTitle:'Add product',
            path:'admin/add-product'})
     }else{
        products.save()
        res.redirect('/')
     }   
    
   
    
 }