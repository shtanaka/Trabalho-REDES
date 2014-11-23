var app = angular.module('TrabalhoRedes', []);

app.controller('formCtrl', function($scope) {
    $scope.existsServer = 'no';
    $scope.isShown = function(existsServer) {
        return existsServer === $scope.existsServer;
    };

    $scope.num = 10;

})

app.filter('range', function() {
  return function(input, total) {
    total = parseInt(total);
    for (var i=0; i<total; i++)
      input.push(i);
    return input;
  };
})

;
