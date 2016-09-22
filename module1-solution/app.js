(function(){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController)

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.CheckLunchItems = function(){
      if(angular.isUndefined($scope.LunchItems) || $scope.LunchItems.length == 0){
        $scope.Message = "Please enter data first"
      }
      else {
        var items  = $scope.LunchItems.split(',')
        if(items.length <= 3){
          $scope.Message = "Enjoy!";
        }
        else {
          $scope.Message = "Too much!";
        }
      }
    };

  }


})();
