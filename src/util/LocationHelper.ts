export class LocationHelper {
    public static getCurrentLocation() {
    if (!navigator.geolocation){
      console.log("Geolocation is not supported by your browser");
      return;
    }
  
    function resolve(position) {      
      return position;
    }
  
    function reject() {
      console.log('Unable to retrieve your location');
    }

    // return function getCurrentPosition as 'Promise'
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

}
