// Install dependencies and require them

const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/userRoute')
const dotenv = require('dotenv').config()

const connectDB = require('./config/db')
const { urlencoded } = require('body-parser')
const port = 3000
connectDB()
const app = express()

app.use('/users',router)
app.use(express.json())
app.use(express.urlencoded({extended:false}))



app.listen(port, () => console.log(`Server connected at port ${port}`))