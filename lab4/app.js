class App {
    constructor(){
        this.getLocation();
        this.lat;
        this.long;
        this.apiKey = "002ff7786663a4aec24da7cb1bf783e3";
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
        if(false){
            this.getWeatherFromCache();
        }
        else{
            this.getWeatherFromApi();
        }
    }

    getWeatherFromCache(){

    }

    getWeatherFromApi(){
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.long}&appid=${this.apiKey}&units=metric`;
        // // response = veel data bevat 
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
        localStorage.setItem(dataName, JSON.stringify(data));
    }

    showAdds(temperature){
       let addId = this.getAddIdByTemperature(temperature);
       this.getAddFromDecathlon(addId);
    }
    
    getAddIdByTemperature(temperature){
        let summerId = 322;
        let winterId = 66;
        let midSeasonId = 38;
        if(temperature > 18){
            // zomer add
            console.log(`temperature is ${temperature}, returning id ${summerId}`);
            return summerId;
        }
        else if(temperature < 4){
            // winter add
            console.log(`temperature is ${temperature}, returning id ${winterId}`);
            return winterId;
        }
        else{
            // tussen seizoen add
            console.log(`temperature is ${temperature}, returning id ${midSeasonId}`);
            return midSeasonId;
        }
    }

    getAddFromDecathlon(id){
        let url = `https://sports.api.decathlon.com/sports/${id}`;
        fetch(url).then(response =>{
            console.log(url);
            return response.json();
        }).then(data => {
            console.log(data);
        }).catch(error => {
            // als dit faalt -> dan geeft men deze error terug 
            console.log(error);
        });
    }

    
}

let app = new App();