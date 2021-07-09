const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const Visitor = require('./models/visitors')

mongoose.connect('mongodb://localhost:27017/visitor',{ 
    useNewUrlParser:true,
    useUnifiedTopology: true
})

mongoose.connection.on('error',err=>{
    console.error('MongoDB Error',error)
})

app.use(cors())
app.use(express.json())

//mock data
const visitors = [{}]


app.get('/',(req,res)=>{
    res.json({message:'visitor API'})
})

app.get('/visitors',async (req,res)=>{
    const visitors = await Visitor.find({})
    res.json(visitors)
})

app.get('/visitors/:id',async (req,res)=>{
    const { id } = req.params
    const visitor = await Visitor.findById(id)
    res.json(visitor)
})

app.post('/visitors',async (req,res)=>{
    const payload = req.body
    const visitor = new Visitor(payload)
    await visitor.save()
    res.status(201).end()
})

app.put('/visitors/:id',async (req,res)=>{
    const payload = req.body
    const { id } = req.params
    
    const visitor = await Visitor.findByIdAndUpdate(id,{$set:payload})
    res.json(visitor)
})

app.delete('/visitors/:id',async (req,res)=>{
    const {id} = req.params
    await Visitor.findByIdAndDelete(id)
    res.status(204).end()
})

var port = 9000;
app.listen(port,()=>{
    console.log('Application Running On Port : '+port)
})