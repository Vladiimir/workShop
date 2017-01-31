catClickerApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /index
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('index', {
      url: "/",
      templateUrl: "../../sections/cats/cats.html",
      controller: 'catsController',
      resolve: {
        catsResolve: function(httpService) {
          return httpService.getCatList();
        }
      }
    })
    .state('about', {
      url: '/about',
      template: '<h1>About</h1><p>About page text.</p>'
    })
    .state('addcat', {
      url: "/addcat",
      templateUrl: "../../sections/addcat/addcat.html",
      controller: 'addCatController'
    })
    .state('login', {
      url: "/login",
      templateUrl: "../../sections/login/login.html",
      controller: 'loginController'
    })
    .state('register', {
      url: "/register",
      templateUrl: "../../sections/register/register.html",
      controller: 'registerController'
    });
});


