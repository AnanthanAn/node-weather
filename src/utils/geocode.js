const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiYW5hbnRoYW5hbiIsImEiOiJja2Zua2lxdjAxbHZ2MzFxaGlpdWsyZXRrIn0.iQPcVnHzUwJonT3LglEqjQ'
    request({ url : url , json : true}, (error, {body}) => {
        if(error){
            callback('Not able to connect to network!!',undefined)
        }else if(body.features.length === 0){
            callback('Not able to find the location!!',undefined)
        }else{
            callback(undefined,{
                long: body.features[0].center[0],
                lat : body.features[0].center[01],
                place_name : body.features[0].place_name,       
            })
        }
    })
}


module.exports = geocode