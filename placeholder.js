var shopingControllers = angular.module('shopingControllers', ['ngAnimate', 'ui.bootstrap']);

shopingControllers.controller('ShopController', ['$scope','$http',function ($scope, $http) {
    
    $http.get('js/data.json').success(function(data) {
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
        
    }
    
    $scope.listFilter = function(list) {
        if ($scope.listIncludes.length > 0) {
            if ($.inArray(list.tag, $scope.listIncludes) < 0)
                return;
        }
        return list;

    }
    
    
}]);