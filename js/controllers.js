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

   	$scope.apps = [];

   	$scope.addApp = function() {
   		$scope.apps.push({name: 'aa', accessNetwork:'bb', accessRemote: 'cc'});
   	}
    
    $scope.vlans = [{name: '', numberOfUsers: 0, internetConnection: false, appConnection: []}];
    


    $scope.addVlan = function() {
    	$scope.vlans.push({name: '', numberOfUsers: 0, internetConnection: false, appConnection: []});
    }
    $scope.popVlan = function() {
    	if($scope.vlans.length > 1) {
    		$scope.vlans.pop();
   		} else {
   			alert("Impossível remover");
   		}
    }


    

});
