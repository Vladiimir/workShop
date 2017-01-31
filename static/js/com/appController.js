catClickerApp.controller('appController', ['$scope', function ($scope) {
  $scope.currentUser = false;
  $scope.changeCurrentUser = function(newVal) {
    $scope.currentUser = newVal;
  };
}]);


