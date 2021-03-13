class App {
    constructor(){
        this.getLocation();
        this.lat;
        this.long;
    }

    getLocation(){
        // het huidige object meegeven als context (bind)
        navigator.geolocation.getCurrentPosition(this.gotLocation.bind(this), this.errorLocation.bind(this));
    }

    gotLocation(result){
        this.lat = result.coords.latitude;
        this.long = result.coords.longitude;
        console.log(this.lat);
    }

    errorLocation(error){
        console.log(error);
    }

}

let app = new App();