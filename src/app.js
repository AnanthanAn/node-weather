const path = require('path')
const geocode = require('./utils/geocode')
const getWeather = require('./utils/weather')
const express = require('express')
const hbs = require('hbs')

const app = express()

console.log(__dirname)

const publicPath = path.join(__dirname,'../public')
const partialPath = path.join(__dirname,'../views/partials')

console.log(publicPath)

app.use(express.static(publicPath))

app.set('view engine', 'hbs')
hbs.registerPartials(partialPath)

app.get('',(req,res) => {
    res.render('index',{
        title : 'Weather'
    })
})


app.get('/about',(req, res) => {
    res.send("About what??")
})

app.get('/Weather',(req, res) => {
    if(!req.query.address){
        res.send({
            error : "Search string not found"
        })
    }
    geocode(req.query.address,(error,{lat,long,place_name} ={}) => {
        const data = {
            place_name: place_name,

        }
        //console.log(data)
        getWeather(lat,long,(error,wData) => {
            data.weather = wData
            //console.log(data)
            res.send(
                data
            )
        })
    })
    
})

app.get('*',(req, res) => {
    res.send('<h1>Error 404</h1>')
})


app.listen(3000,() =>{
    console.log('Server started and running')
})