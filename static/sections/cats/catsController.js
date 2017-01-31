catClickerApp.controller('catsController', ['$scope', '$http', '$cookies', 'httpService', 'catsService', 'catsResolve', function ($scope, $http, $cookies, httpService, catsService, catsResolve) {
    $scope.pageTitle = 'Articles';

    if(!$scope.cats) {
      //catsResolve - data from router :resolve
      $scope.cats = catsResolve.data;

      //disable cat voting
      catsService.disableVoting($scope.cats, $scope.currentUser);

      //set voting from cookies to scope.cat
      catsService.setVoting($scope.cats);
    }

    $scope.deleteCat = function(cat) {
      httpService.deleteCat(cat).then(function successCallback(response) {
        //$scope.$apply();
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
      //remove deleted cats from scope
      catsService.deleteCatFromScope($scope.cats, cat);
    }

    $scope.voteForCat = function(cat) {
      catsService.voteForCat(cat, $scope.currentUser);
    }

  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group, event) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
    group.checked = true;
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };

  $scope.q="";
  $scope.submitSearch=function(){
    $scope.q= $scope.query
  }

    $scope.submitCatForm = function(cat) {
        httpService.updateCat(cat).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            throw response;
        });
    }
  }]);
