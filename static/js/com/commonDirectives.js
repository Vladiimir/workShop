catClickerApp
  .directive('myFocus', function() {
    return {
      restrict: 'A',
      link: function (scope, element) {
        element[0].focus();
      }
    };
  })

  .directive('submitOnEnter', function() {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        element.bind('keydown', function(event) {
          var code = event.keyCode || event.which;
          if (code === 13) {
            event.preventDefault();
            scope.$apply(function(){
              scope.$eval(attrs.submitOnEnter, {'event': event});
            });
          }
        });
      }
    };
  })

    .directive('catForm', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/templates/cat-form.html'
        };
    });