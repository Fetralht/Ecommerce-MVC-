//importer module et chemin
const path=require('path')
const http=require('http')
const adminData=require('./routes/admin.js')
const shopRouteur=require('./routes/shop.js')
const express=require('express')
const bodyParser=require('body-parser')
const rootDir=require('./util/path.js')
const controllers=require('./controllers/404')
//creer un application express
const app=express()
//fonction middleware
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))
app.use('/admin',adminData.router)
app.use(shopRouteur)
app.use(controllers.page404)
//ecoute le port 2001
app.listen(2001)





