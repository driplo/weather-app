app.controller('MainController', ['$scope', 'forecast', 'currentWeather', '$http', 'apiKey', '$sanitize', function($scope, forecast, currentWeather, $http, apiKey, $sanitize) {

  currentWeather.success(function (dataW) {
    $scope.currentWeather = dataW;
    console.log($scope.currentWeather);
  });

  forecast.success(function (dataFC) {
    $scope.forecast = dataFC.list;
    console.log($scope.forecast);
  });

}]);
