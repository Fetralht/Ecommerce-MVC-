const http=require('http')
const express=require('express')

const app=express()

app.use((req,res,next)=>{
   console.log('it s middleware')
   res.send('<h1>express.js from nodejs</h1>')
   next()
})
app.use((req,res,next)=>{
    console.log('it s middleware2222')
    res.setHeader('Content-Type','text/html')
    res.send('<h1>express.js  nodejs</h1>')
 })
app.listen(2001)



