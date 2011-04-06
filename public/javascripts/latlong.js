function body_onLoad() {
   if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(geo_onSuccess, geo_onError);
   } else {
       geo_onError();
   }
};

function geo_onSuccess(pos) {
   document.getElementById("timestamp").innerHTML = new Date().toLocaleString();

   document.getElementById("latitude").innerHTML = pos.coords.latitude;
   document.getElementById("longitude").innerHTML = pos.coords.longitude;
};

function geo_onError() {
   alert("Unable to get latitude/longitude, or browser does not support geolocation API.");
};