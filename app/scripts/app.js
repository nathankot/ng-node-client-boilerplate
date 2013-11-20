'use strict';

angular.module('sampleApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

angular.module('sampleApp').constant('lodash', window._);
angular.module('sampleApp').constant('jQuery', window.$);
