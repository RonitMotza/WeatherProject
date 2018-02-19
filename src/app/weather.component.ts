import { Component } from '@angular/core';
import { Http } from '@angular/http';
@Component ({
selector: 'weather',
templateUrl: './weather.component.html',
styleUrls:['./weather.component.css']

})
export class WeatherComponent {
arItems :any;
cityName:string;
showItAll:any;
isItShow=false;
clickHandlerGet(){

let req = this.http.get("http://api.openweathermap.org/data/2.5/weather?q=" + this.cityName + "&APPID=d91771f1ec6a12f917ef97f33c3b6d5d");
req .subscribe( rsp => {
this.arItems = rsp.json();
console.log(this.arItems);

let desc = this.arItems.weather[0]['description'];
let maxtemp = this.arItems['main']['temp_max']-275;
let mintemp = this.arItems['main']['temp_min']-275;
let sys = this.arItems['sys']['sunrise'];

this.showItAll = "Description Day: " + desc + ",  Max temp: " + maxtemp
                        + ",  Min temp: " + mintemp + "  Sunrise: " + sys ;
    this.isItShow = true;

(err : Response) => {
console.log("error : " + err);
 this.isItShow = false;
 this.showItAll = "City not found";
}

});
}
constructor(private http : Http){}

}