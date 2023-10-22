const http=require('http')
const express=require('express')

const app=express()

app.use('/add-product',(req,res,next)=>{
   console.log('In new middleware')
   res.send('<h1>add "the add-product" </h1>')
   next()
})
app.use('/',(req,res,next)=>{
    console.log('In another middleware')
    res.send('<h1>helo from express</h1>')
 })
app.listen(2001)



