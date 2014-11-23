var app = angular.module('TrabalhoRedes', []);

app.controller('formCtrl', function($scope) {
    $scope.existsServer = 'no';
    $scope.isShownApp = function(existsServer) {
        return existsServer === $scope.existsServer;
    };

    $scope.enableConnection = 'no';
    $scope.isShownConnectivity = function(enableConnection) {
        return enableConnection === $scope.enableConnection;
    };

    
    $scope.apps = [{name: '', accessNetwork: '', acessInternet: ''}];
    
    $scope.addApp = function() {
    	$scope.apps.push({name: '', accessNetwork: '', acessInternet: ''});
    }
    $scope.popApp = function() {
    	$scope.apps.pop();
    }

    $scope.vlans = [{name: '', numberOfUsers: 0, internetConnection: false, appConnection: []}];
    
    $scope.addApp = function() {
    	$scope.apps.push({name: '', numberOfUsers: 0, internetConnection: false, appConnection: []});
    }
    $scope.popApp = function() {
    	$scope.apps.pop();
    }

});
