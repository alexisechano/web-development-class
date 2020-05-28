//Lab 03: Weather Lab
//Alexis Echano, 2020
var https = require('https');
module.exports.run_setup = function(app){
    
    function get_city_and_state(req,res,next) 
    {
        var lat = req.query.lat;
        var long = req.query.long;
        var url = 'https://api.weather.gov/points/'; //add to this string
        url += lat;
        url += ',';
        url += long;
        
        var latstr = lat + "";
        var lonstr = long + "";
        if(latstr.length > 7 || lonstr.length > 9 )
        {
            res.send("Invalid Input!! Click the back button!")
        }
        
        var options =  { headers : {
    		'User-Agent': 'request'
    	    }
        }
        
        https.get(url, options, function(response) {
    
        response.on('data', function(d) {
            
            var obj = JSON.parse(d.toString());
            if(obj.status == "404")
            {
                res.send("Invalid Input!! Click the back button!")
            }
            else
            {
                console.log(obj.properties)
                var current = obj.properties
                
                //check for areas in the US with no forecast available! properties.forecast: null
                if(current.forecast === null)
                {
                     res.send("No weather information for this location!! Click the back button!")
                }
                
                else
                {
                    var citycurr = current.relativeLocation.properties.city
                    var statecurr = current.relativeLocation.properties.state
                    
                    res.locals.forecastURL = current.forecast //this is a string (URL)
                    res.locals.cityN = citycurr
                    res.locals.stateN = statecurr  
                    
                    console.log("gets through here!")
                    next()
                    
                }
            }
            
        });
        
        }).on('error', function(e) {
            console.error(e);
        });
        
    }
    
    function get_forecast(req,res,next)
    {
        var nurl = res.locals.forecastURL    //gets the forecastURL
        console.log(nurl);
        var options =  { headers : {
    		'User-Agent': 'request'
    	    }
        }
        
        https.get(nurl, options, function(response) {
        response.on('data', function(fore) {
            
            var obj = JSON.parse(fore.toString());
            var currentForecasts = obj.properties.periods //list of fun stuff
            var forecasts = []
            console.log(currentForecasts);
            for (var i=0; i<currentForecasts.length; i++) 
            {
                var words = currentForecasts[i].shortForecast
                if(words.includes("Sunny"))
                {
                    forecasts.push({name:currentForecasts[i].name, temp:currentForecasts[i].temperature,basicForecast:words, img: "https://cdn0.iconfinder.com/data/icons/weather-line-19/32/Sunny-256.png"});
                }
                else if (words.includes("Clear"))
                {
                    forecasts.push({name:currentForecasts[i].name, temp:currentForecasts[i].temperature,basicForecast:words, img: "https://cdn0.iconfinder.com/data/icons/weather-line-19/32/Thermometer_Cold-256.png"});
                }
                else if (words.includes("Snow"))
                {
                    forecasts.push({name:currentForecasts[i].name, temp:currentForecasts[i].temperature,basicForecast:words, img: "https://cdn0.iconfinder.com/data/icons/weather-line-19/32/Snow-256.png"});
                }
                else if (words.includes("Rain"))
                {
                    forecasts.push({name:currentForecasts[i].name, temp:currentForecasts[i].temperature,basicForecast:words, img: "https://cdn0.iconfinder.com/data/icons/weather-line-19/32/Light_Rain-256.png"});
                }
                else if (words.includes("Cloudy"))
                {
                    forecasts.push({name:currentForecasts[i].name, temp:currentForecasts[i].temperature,basicForecast:words, img: "https://cdn0.iconfinder.com/data/icons/weather-line-19/32/Overcast-256.png"});
                }
            }
            
            var feed_dictionary = {city : res.locals.cityN, state : res.locals.stateN, forecastGeneral : forecasts}
            res.locals.feed_d = feed_dictionary
            res.render('weather_display', feed_dictionary);
            next()
        });
        
        response.on('end', function() {
          console.log('Ending');
        });
        
    
        }).on('error', function(e) {
            console.error(e);
        });
        
        
    }
    
    app.get('/getweather', [get_city_and_state, get_forecast], function(req, res){
        console.log("getting weather beep...");
    });
    
    app.get('/jsonweather', function(req, res){
        res.json(res.locals.feed_d);
    });
    
    app.get('/weather', function(req, res){
        res.render('weather');
    });
}