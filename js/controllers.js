var app = angular.module('TrabalhoRedes', []);

app.controller('formCtrl', function($scope) {
    $scope.existsServer = 'no';
    $scope.isShown = function(existsServer) {
        return existsServer === $scope.existsServer;
    };

    
    $scope.apps = [{name: '', accessNetwork: '', acessInternet: ''}];
    
    $scope.add = function() {
    	$scope.apps.push({name: '', accessNetwork: '', acessInternet: ''});
    }
    $scope.pop = function() {
    	$scope.apps.pop({name: '', accessNetwork: '', acessInternet: ''});
    }



})


;
