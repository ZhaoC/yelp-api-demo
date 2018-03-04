export class LocationHelper {
    public static getCurrentLocation() {
    if (!navigator.geolocation){
      console.log("Geolocation is not supported by your browser");
      return;
    }
  
    // set resolve for promise
    function resolve(position) {      
      return position;
    }
  
    // set rejecte for promise
    function reject() {
      console.log('Unable to retrieve your location');
    }

    // return function getCurrentPosition as 'Promise'
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

}
