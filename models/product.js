const fs=require('fs')
const path=require('path')
module.exports=class product{
    constructor(t){
        this.title=t
    }
    save(){
       const p=path.dirname(process.mainModule.filename,'data','products.json')
       fs.readFile(p,)
    }
   static fetchAll(){
      return products
   }
}