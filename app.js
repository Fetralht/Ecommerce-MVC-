const path=require('path')
const http=require('http')
const adminData=require('./routes/admin.js')
const shopRouteur=require('./routes/shop.js')
const express=require('express')
const bodyParser=require('body-parser')
const rootDir=require('./util/path.js')



const app=express()
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))
app.use('/admin',adminData.router)
app.use(shopRouteur)
app.use((req,res,next)=>{
   res.status(404).sendFile(path.join(rootDir,'views','404.html'))
})



app.listen(2001)





