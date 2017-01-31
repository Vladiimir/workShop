catClickerApp.controller('addCatController', ['$scope', '$http', 'httpService', function ($scope, $http, httpService) {
  $scope.pageTitle = 'add Article';
  $scope.catDefault = {
    title: '',
    text: '',
    image: ''
  };

  $scope.submitCatForm = function(cat) {
    httpService.addCat(cat).then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available

      $scope.clearCatForm(cat);
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      $scope.clearCatForm(cat);
    });
    $scope.clearCatForm(cat);
    //cat = $scope.catDefault;
    //$scope.cat = $scope.catDefault;
    //console.log(cat);
  }

  $scope.clearCatForm = function(cat) {
    $scope.catForm.$setPristine();
    $scope.cat = $scope.catDefault;
    cat = $scope.catDefault;
  }

}]);
