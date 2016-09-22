(function(){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController)

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.CheckLunchItems = function(){
      var items = $scope.LunchItems.split(',')
      if(items.length <= 3){
        $scope.Message = "Enjoy!";
      }
      else {
        $scope.Message = "Too much!";
      }
    };

  }


})();
