const fs = require('fs');
const path = require('path');
const products=require('./product.js')

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
);
//products.fetchAll(product=>console.log('product:',product))
module.exports = class Cart {
    static addProduct(id,productPrice) {
        let existingProduct
        let cart = { products: [], totalPrice: 0 };

        fs.readFile(p, 'utf-8', (err, fileContent) => {
        console.log('filecontent',fileContent)
        if(!err && fileContent.trim()!==''){
            cart=JSON.parse(fileContent)
            console.log('cartParser:',cart);
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
            existingProduct = cart.products[existingProductIndex];
            console.log('existingProducts',existingProduct);
        }
        
            
        let updateProduct   
        
        //console.log('cart',newCart);
        
        
        if(existingProduct){
             console.log('existingProduct',existingProduct)
             existingProduct.qty += 1
             

        }else{
             updateProduct = { id: id, qty: 1 };
             cart.products.push(updateProduct);
        }
        
        
        //console.log('new cart',cart)
        fs.writeFile(p,JSON.stringify(cart),(err,fileContent)=>{
            if(!err){
                console.log(err);
            }
        })
            
       

        })
            
            
                // Analyser le panier => recherche d'un produit existant dans le panier
            
            

                // Ajout de nouveaux produits, augmentation de la quantité
            

            /*if (existingProduct) {
                 console.log(cart.products[existingProductIndex])
                 existingProduct.qty += 1;
                
                 cart.products[existingProductIndex] = existingProduct;
                
                 console.log(existingProduct)
            } else {
                updateProduct = { id: id, qty: 1 };
                cart.products.push(updateProduct);
                console.log('new cart',cart)
            }
            let price= +productPrice
            cart.totalPrice += price;
            price=0
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
                const existingProduct = cart.products[existingProductIndex];
                if(existingProduct){
                    existingProduct.qty+=1
                }else{
                    updateProduct = { id: id, qty: 1 };
                    cart.products.push(updateProduct);
                }*/
           
           
    }
};
