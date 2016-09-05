angular.module('devmtnTravel').controller("packagesCtrl",function($scope, mainSrv){
        $scope.package = mainSrv.travelInfo;
})
