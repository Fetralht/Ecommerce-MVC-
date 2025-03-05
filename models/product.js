const path=require('path')
const fs=require('fs')
const p=path.join(path.dirname(require.main.filename),'data','product.json')
const getfunctionData=callback=>{
  fs.readFile(p,(err,data)=>{
    if(err){
      callback([])
    }else if(data.trim==''){
      callback([])
    }else{
      callback(JSON.parse(data))
    }
  })
  
}
module.exports=class product{
    
    constructor(title,imageURL,price,description){
        this.title=title
        this.imageURL=imageURL
        this.price=price
        this.description=description
    }
    
    save(){
      this.id=Math.random().toString()
      this.nom='lahatra'
      getfunctionData( products=>{
      
        products.push(this)
        console.log(typeof(products));
        fs.writeFile(p,JSON.stringify(products),(err,data)=>{
          console.log(err)
        })
      })
     
    }
   
    static fetchAll(callback){
      getfunctionData(callback)
    }
    static findbyId(id){
      getfunctionData(products=>{
        const product=products.find(p=>p.id===id)
        console.log(product.price)
      })
    }
    // static delete(){
    //     getfunctionData(products=>{

    //     })
    // }

}