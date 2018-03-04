import { HttpClient } from '@angular/common/http';
import {Injectable} from "@angular/core";

import { LocationHelper } from './LocationHelper';

@Injectable()
export class YelpHelper {

  public static async getYelpSiteData(http: HttpClient, option): Promise<any[]>{
 
    const deviceLocation = await LocationHelper.getCurrentLocation(); // get user current location
    // console.log(deviceLocation);

    var latitudeValue  = deviceLocation['coords'].latitude;
    var longitudeValue = deviceLocation['coords'].longitude;

    // const urlPrefix = "http://127.0.0.1:3090/yelp/"; //enble this if for local test, need talk to express server for API access
    const urlPrefix = "https://nodejs-demo-server.herokuapp.com/yelp/";
    const urlSuffix  = "/latitude/"+latitudeValue+"/longitude/"+longitudeValue;

    var url = urlPrefix + option + urlSuffix;

    const data = await http.get(url).toPromise(); //get store data from yelp API

    // this.http.get(urlPrefix + option).subscribe(data => {
    //   console.log(data);
    //   this.groceryStores = data['businesses'];
    // });

    console.log(data['businesses']);
    return data['businesses']; // return store data retrieved
  }
}
