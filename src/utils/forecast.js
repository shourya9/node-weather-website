const request=require('request')

const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=e6bfee5911f5b45f0e6ceaabe2f301e1&query='+latitude+','+longitude+'&units=m'

    request({url,json:true},(error,{body})=>{
        if(error)
        {
            callback('Unable to coonect to weather services!',undefined)
        }
        else if(body.error)
        {
            callback('Unable to find location',undefined)
        }
        else{
            callback(undefined,body.current.weather_descriptions[0]+". It is currently "+ body.current.temperature+" degrees out. "+"It feels like "+body.current.feelslike+" degrees out. The humidity is "+body.current.humidity+" precentage.")
        }    
    })
}

module.exports=forecast