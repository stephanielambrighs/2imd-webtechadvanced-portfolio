class App {
    constructor(){
        this.getLocation();
        this.lat;
        this.long;
        this.apiKey = "002ff7786663a4aec24da7cb1bf783e3";
        this.cacheTimeoutSeconds = 3600;
    }

    getLocation(){
        // het huidige object meegeven als context (bind)
        navigator.geolocation.getCurrentPosition(this.gotLocation.bind(this), this.errorLocation.bind(this));
    }

    gotLocation(result){
        this.lat = result.coords.latitude;
        this.long = result.coords.longitude;
        this.getWeather();
    }

    errorLocation(error){
        console.log(error);
    }

    getWeather(){
        let temperaturedict = this.getWeatherFromCache();
        if(temperaturedict == null){
            this.getWeatherFromApi();
        }
        else{
            let newTimestamp =  Date.now();
            let oldTimestamp = temperaturedict['timestamp'];
            let cacheAge = newTimestamp - oldTimestamp;
            console.log("Old time: " + oldTimestamp);
            console.log("New time: " + newTimestamp);
            if(cacheAge >= this.cacheTimeoutSeconds*1000){
                this.getWeatherFromApi();
            }else{
                this.showAdds(temperaturedict['temperature']);
            }   
        }
    }

    getWeatherFromCache(){
        if(localStorage.getItem('temperature') != null){
            let temperature = JSON.parse(localStorage.getItem('temperature'));
            return temperature;
        }
        else{
            return null;
        }
    }

    getWeatherFromApi(){
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.long}&appid=${this.apiKey}&units=metric`;
        fetch(url)
            .then(response =>{
                console.log(response);
                return response.json();})
            .then(data => {
                console.log(data);
                let temperature = data.main.temp;
                this.saveToStorage('temperature', temperature);
                this.showAdds(temperature);
            })
            .catch(error => {
                // als dit faalt -> dan geeft men deze error terug 
                console.log(error);
            });
    }

    saveToStorage(dataName, data){
        let dict = {};
        dict[dataName]=data;
        dict["timestamp"]=Date.now();
        localStorage.setItem(dataName, JSON.stringify(dict));
    }

    showAdds(temperature){
       let addId = this.getAddIdByTemperature(temperature);
       this.getAddFromDecathlon(addId);
    }
    
    getAddIdByTemperature(temperature){
        //let sportname = getAddFromDecathlon(data);
        let summerId = 322;
        let winterId = 66;
        let midSeasonId = 38;
        if(temperature > 18){
            // zomer add
            console.log(`temperature is ${temperature}, returning id ${summerId}`);
            document.querySelector(".temperature").innerHTML = "de temperatuur is "+ temperature + "°C";
            return summerId;
        }
        else if(temperature < 4){
            // winter add
            console.log(`temperature is ${temperature}, returning id ${winterId}`);
            document.querySelector(".temperature").innerHTML = "de temperatuur is "+ temperature + "°C";
            return winterId;
        }
        else{
            // tussen seizoen add
            console.log(`temperature is ${temperature}, returning id ${midSeasonId}`);
            document.querySelector(".temperature").innerHTML = "de temperatuur is "+ temperature + "°C";
            return midSeasonId;
        }
    }

    getAddFromDecathlon(id){
        let url = `https://sports.api.decathlon.com/sports/${id}`;
        fetch(url).then(response =>{
            console.log(url);
            return response.json();
        }).then(data => {
            let name = data.data.attributes.name;
            let image = data.data.relationships.images.data[0].url;
            document.querySelector(".sport").innerHTML = "De sport die je kan uitvoeren is: "+ name;
            document.querySelector("#weather").style.background = `url(${image})`;
            document.querySelector("#weather").style.backgroundRepeat = "no-repeat";
            document.querySelector("#weather").style.backgroundSize = "450px 600px";
            
        }).catch(error => {
            // als dit faalt -> dan geeft men deze error terug 
            console.log(error);
        });
    }

    
}

let app = new App();