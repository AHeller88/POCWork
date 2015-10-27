var winterland = angular.module('winterland', ['ngRoute','shopingControllers']);

winterland.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/home', {templateUrl: 'partials/home.html', controller: 'ShopController'}).
        otherwise({redirectTo: '/home'});

    
}])