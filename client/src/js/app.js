var app = angular.module('angularWeather', ['ngRoute', 'ngSanitize']);

app
  .config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        controller: 'MainController',
        templateUrl: 'views/main.html'
      })
      .when('/:championId',{
        controller:'ChampionController',
        templateUrl:'views/champion.html'
      })
      .otherwise({ redirectTo: '/' });

  })

  .constant('apiKey', '4af675558f8e5fe6328174e44601e9c2')

  .filter('to_trusted', ['$sce', function ($sce) {
    return function (text) {
      return $sce.trustAsHtml(text);
    };
  }]);
