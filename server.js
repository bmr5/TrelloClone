const express = require('express')
const path = require('path')

const app = express()
const port = 3000

//print out when you get any request and of what kind
app.use('*', (req,res, next)=>{
    console.log(`${req.method} request from ${req.url} for ${req.params}`)
    next()
})

//serve the bundle.js as a static file first
app.use(express.static(path.resolve(__dirname, '/build')),(req, res,next)=>{
    next();
})

//serve basic html on homepage request
app.get('/', (req, res, next) =>
  res.status(200).sendFile(path.join(__dirname, './index.html'))
);

//error out if nothing is working
app.all((err, req, res, next)=>{
    console.log(`global error`, err)
    res.status(500).send(`Internal Server Error`)
})

//start running the server on the secure port from the .env file
app.listen(port, ()=>{
    console.log(`server listening on Port ${port}`)
})