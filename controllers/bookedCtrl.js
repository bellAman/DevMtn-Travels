angular.module('devmtnTravel').controller("bookedCtrl",function($scope, mainSrv, $state){
        var wanted = $state.params.id
        var array = mainSrv.travelInfo;
       for (var i = 0; i < array.length; i++){
         if(array[i].id == wanted){
           $scope.book = array[i]
         }
       }

})


// write a function that checks the url params and then loops over
//  the data object in the service and then returns
// the object the matches the id being passed in the url params. Do this in your controller -->
