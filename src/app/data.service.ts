import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()

export class DataService {

  constructor(private http: Http ) { } //injected the Http service into your  local http: variable. Now you can use get

fetchData(){ //fn fetchData
  this.http.get('/public/peoples.json').subscribe(
    (data) => console.log(data);
   //setting up an observable, which is something you can subscribe to & listen for changes to. With an observable you have subscribe in order to reach out and grab what data you want to get.
);
}

}
