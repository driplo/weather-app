app.factory('forecast', ['$http', 'apiKey', function ($http, apiKey) {
  return $http.get('http://api.openweathermap.org/data/2.5/forecast?id=3036572&cnt=4&units=metric&lang=fr&appid=' + apiKey)
            .success(function (data) { return data; })
            .error(function (err) { return err; });
}]);

app.factory('currentWeather', ['$http', 'apiKey', function ($http, apiKey) {
  return $http.get('http://api.openweathermap.org/data/2.5/weather?id=3036572&units=metric&lang=fr&appid=' + apiKey)
            .success(function (data) { return data; })
            .error(function (err) { return err; });
}]);

// app.factory('freechampions', ['$http', 'apiKey', function ($http, apiKey) {
//   return $http.get('https://euw.api.pvp.net/api/lol/euw/v1.2/champion?freeToPlay=true&api_key=' + apiKey)
//             .success(function (data) { return data; })
//             .error(function (err) { return err; });
// }]);
