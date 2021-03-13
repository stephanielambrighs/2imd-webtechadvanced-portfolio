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
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.long}&appid=${this.apiKey}`;
        // // response = veel data bevat 
        fetch(url).then(response =>{
            console.log(response);
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