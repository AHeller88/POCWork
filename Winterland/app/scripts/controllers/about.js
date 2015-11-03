'use strict';

/**
 * @ngdoc function
 * @name winterlandApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the winterlandApp
 */

angular.module('winterlandApp')
  .controller('AboutCtrl', ['$scope','$http',function ($scope, $http) {
    
    $http.get('scripts/data.json').success(function(data) {
        console.log('got data');
        $scope.list = data;
        $scope.shopOrder = 'tag';
    });
    
    $scope.dynamicPopover = {
        content: '5',
        img: 'something.jpg',
        title:'Title',
        templateUrl: 'popTemp.html',
        templateUrl1: 'popTemp1.html',
        templateUrl2: 'popTemp2.html'
    };
    
      
    $scope.listIncludes = [];
    
      
    $scope.includeTag = function(tag) {
        var i = $.inArray(tag, $scope.listIncludes);
        if (i > -1) {
            $scope.listIncludes.splice(i,1);
        } else {
            $scope.listIncludes.push(tag);
        }
        
    };
    
      
     
    $scope.listFilter = function(list) {
        if ($scope.listIncludes.length > 0) {
            if ($.inArray(list.tag, $scope.listIncludes) < 0){
                return;
            }     
        }
        return list;

    };
}]);