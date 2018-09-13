import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import 'rxjs/add/operator/map';



@Injectable()

export class DataService {

  constructor(private http: Http) { } //injected the Http service into your  local http: variable. Now you can use get


fetchData(){
  return this.http.get('https://angulardirectory.firebaseio.com/.json').map(
    (res) => res.json()
  )
}


// fetchData(){ //fn fetchData
//   return this.http.get('/public/peoples.json').map(
//     (response:Response) => response.json()
//   )
// }



//subscribe is great for logging to the console. we are putting it in directory.component.ts instead though. That is b.c we are mapping here.
  // .subscribe(
    // (data) => console.log(data);
   //setting up an observable, which is something you can subscribe to & listen for changes to. With an observable you have subscribe in order to reach out and grab what data you want to get.
// );


}
