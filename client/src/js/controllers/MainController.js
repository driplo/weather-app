app.controller('MainController', ['$scope', 'forecast', '$http', 'apiKey', '$sanitize', function($scope, forecast, $http, apiKey, $sanitize) {

  navigator.geolocation.getCurrentPosition(function(position) {
    console.log('My position : '+position);
    var lang = navigator.language;
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    $scope.lang = lang;
    $scope.lat = lat;
    $scope.lng = lng;
    // $scope.$apply(function(){
    //   $scope.lat = lat;
    //   $scope.lng = lng;
    //   $scope.lang = lang;
    // });


    $scope.updateWeather = function(lat,lng){
      console.log(lat);
      console.log(lng);
      $http({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lng+'&units=metric&lang='+$scope.lang+'&appid=' + apiKey
      }).success(function(dataW) {
        $scope.currentWeather = dataW;
        console.log($scope.currentWeather);
      });

    }

    $scope.updateWeather($scope.lat, $scope.lng);

    // function updateWeather(lat, lng){
    //   $http({
    //     method: 'GET',
    //     url: 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lng+'&units=metric&lang='+$scope.lang+'&appid=' + apiKey
    //   }).success(function(dataW) {
    //     $scope.currentWeather = dataW;
    //     console.log($scope.currentWeather);
    //   });
    // }

    // updateWeather($scope.lat, $scope.lng);

  });

  forecast.success(function (dataFC) {
    $scope.forecast = dataFC.list;
    // console.log($scope.forecast);
  });

}]);
