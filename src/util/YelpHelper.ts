import { HttpClient } from '@angular/common/http';
import {Injectable} from "@angular/core";

import { LocationHelper } from './LocationHelper';

@Injectable()
export class YelpHelper {

  public static async getYelpSiteData(http: HttpClient, option): Promise<any[]>{

    // get user current location
    const deviceLocation = await LocationHelper.getCurrentLocation();
    // console.log(deviceLocation);
    var latitudeValue  = deviceLocation['coords'].latitude;
    var longitudeValue = deviceLocation['coords'].longitude;

    // const urlPrefix = "http://127.0.0.1:3090/yelp/"; //enble this if for local test, need talk to express server for API access
    const urlPrefix = "https://nodejs-demo-server.herokuapp.com/yelp/";
    const urlSuffix  = "/latitude/"+latitudeValue+"/longitude/"+longitudeValue;
    var url = urlPrefix + option + urlSuffix;

    const data = await http.get(url).toPromise();

    console.log(data['businesses']);
    //update listView content with data retrieved
    return data['businesses']; 

    // this.http.get(urlPrefix + option).subscribe(data => {
    //   console.log(data);
    //   this.groceryStores = data['businesses'];
    // });
  }

}
