angular.module('devmtnTravel').controller("locationsCtrl",function($scope,mainSrv){
        $scope.location = mainSrv.travelInfo;
})
