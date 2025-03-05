const productions=require('../models/product.js')

exports.getProduct=(req,res,next)=>{
    console.log("it's working well");
    
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
    console.log('titre: ',req.body.title);
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
exports.getAdminProduct=(req,res,next)=>{
    console.log("it's working");
    
    res.render('admin/admin-product',{
        docTitle:'Admin product',
        path:'admin/admin-product'})
}
