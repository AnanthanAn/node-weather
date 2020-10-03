const request = require('request')

const getWeather = (lat,long, callback) => {
    const url ='http://api.weatherstack.com/current?access_key=1dd6e29e9eaf6a7bb88eb0a68d1d3c0b&query='+lat+','+long
    request({ url : url , json : true}, (error, {body}) => {
        if(error){
            callback('Not able to connect to network!!',undefined)
       // }else if(response.body.features.length === 0){
         //   callback('Not able to find the location!!',undefined)
        }else{
            callback(undefined,{
                temp : body.current.temperature,
                feels_like : body.current.feelslike
            })
        }
    })
}


module.exports = getWeather