// Custom javascript for geopip

var fillCityName = (function(){
    var cityText = function(geoipResponse){
        var cityName = geoipResponse.city.names.en || "your city";
        var lat = geoipResponse.location.latitude;
        var lon = geoipResponse.location.longitude;
        $("#city").html(cityName);
        $("#lat").html(lat);
        $("#lon").html(lon);
    };
    var onSuccess = function(geoipResponse) {
        cityText(geoipResponse);
    };

    var onError = function(error){
        return;
    };

    return function(){
        geoip2.city(onSuccess, onError);
    };
}());

fillCityName();

