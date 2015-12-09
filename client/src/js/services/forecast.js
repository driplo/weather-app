app.factory('forecast', ['$http', 'apiKey', function ($http, apiKey) {
  return $http.get('http://api.openweathermap.org/data/2.5/forecast?id=3036572&cnt=4&units=metric&lang=fr&appid=' + apiKey)
            .success(function (data) { return data; })
            .error(function (err) { return err; });
}]);
