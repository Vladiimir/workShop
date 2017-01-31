catClickerApp.service('httpService', ['$http', function ($http) {

  this.addCat = function (cat) {
    return $http({
      method: 'POST',
      url: '/addcat',
      data: cat
    });
  };

  this.updateCat = function (cat) {
      return $http({
          method: 'POST',
          url: '/updatecat',
          data: cat
      });
  };

  this.getCatList = function () {
    return $http({
      method: 'POST',
      url: '/getcatlist'
    });
  };

  this.deleteCat = function (cat) {
    return $http({
      method: 'POST',
      url: '/deletecat',
      data: cat
    });
  };

}]);


