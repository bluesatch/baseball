const express = require('express')
const server = express()
const helmet = require('helmet')
const cors = require('cors')
const port = process.env.port || 3005

const router = require('./app/routes/router')


// chain .use() methods
server.use(helmet())
    .use(cors())
    .use(express.json())
    .use(express.urlencoded({extended: true}))

// point to router for localhost:3005
server.use('/', router)

server.listen(port, ()=> console.log(`Port ${port} is out of the park!`))