const request = require("request")

const forcast =(name , callback) => {

    const url = `https://api.weatherapi.com/v1/current.json?key=0c6555a6f8d34b8c8cc100506240711&q=${name}&aqi=no`
    
    request({ url, json: true }, (error, response) => {
        if (error) {
            //Low Level Error Handling
            callback("**ERROR HAS OCCURED**",undefined)
        }
        else if(response.body.error){
            //Display ERROR MESSAGE
            callback(`**ERROR: ${response.body.error.message}**`, undefined)
        }
        else{
            callback(undefined,`Temp= ${response.body.current.temp_c}\n Latitude= ${response.body.location.lat}\n Longitude= ${response.body.location.lon}`)
        }
    })
}

    module.exports = forcast