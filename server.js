const express = require('express')


const app = express()


const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {

    res.send('Welcome to Home Page')
})


app.get('/data', (req, res) => {

    res.json(Products)


   
})


app.get('/posts', (req, res) => {

    res.send('This is Post Page')
})



const Products = [

    { name : 'Belal', email:'soft.belal@gmail.com'},
    { name : 'Belal', email:'soft.belal@gmail.com'},
    { name : 'Belal', email:'soft.belal@gmail.com'},
    { name : 'Belal', email:'soft.belal@gmail.com'},
    { name : 'Belal', email:'soft.belal@gmail.com'}


]


app.listen(PORT, () => {

    console.log('Server is Running')

})
