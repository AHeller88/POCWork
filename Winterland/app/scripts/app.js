'use strict';

/**
 * @ngdoc overview
 * @name winterlandApp
 * @description
 * # winterlandApp
 *
 * Main module of the application.
 */
angular
  .module('winterlandApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/hotel', {
        templateUrl: 'views/hotel.html',
        controller: 'HotelCtrl',
        controllerAs: 'hotel'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

