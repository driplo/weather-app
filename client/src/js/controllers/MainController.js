app.controller('MainController', ['$scope', 'forecast', '$http', 'apiKey', '$sanitize', function($scope, forecast, $http, apiKey, $sanitize) {

  navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position);
    var lang = navigator.language;
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;

    $scope.$apply(function(){
      $scope.lat = lat;
      $scope.lng = lng;
      $scope.lang = lang;
    });

    $http({
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather?lat='+$scope.lat+'&lon='+$scope.lng+'&units=metric&lang='+$scope.lang+'&appid=' + apiKey
    }).success(function(dataW) {
      $scope.currentWeather = dataW;
      console.log($scope.currentWeather);
    });

  })

  // currentWeather.success(function (dataW) {
  //   $scope.currentWeather = dataW;
  //   console.log($scope.currentWeather);
  // });

  forecast.success(function (dataFC) {
    $scope.forecast = dataFC.list;
    console.log($scope.forecast);
  });

}]);
