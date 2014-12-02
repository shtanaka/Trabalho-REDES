var app = angular.module('TrabalhoRedes', []);

app.controller('formCtrl', function($scope) {
    $scope.existsServer = 'no';
    $scope.teste = 0;
    $scope.isShownApp = function(existsServer) {
        return existsServer === $scope.existsServer;
    };



    $scope.enableConnection = 'no';
    $scope.isShownConnectivity = function(enableConnection) {
        return enableConnection === $scope.enableConnection;
    };

   	$scope.apps = [];
   	$scope.nameApp = '';
   	$scope.networkApp = false;
   	$scope.remoteApp = false;

   	$scope.addApp = function() {
   		$scope.apps.push({name: $scope.nameApp,
   						  accessNetwork: $scope.networkApp,
   						  accessRemote: $scope.remoteApp});
   	}
    
   	$scope.removeApp = function(app) {
   		index = $scope.apps.indexOf(app);
   		$scope.apps.splice(index, 1);
   	}

    $scope.vlans = [];
    $scope.nameVlan = '';
    $scope.numberOfUsersVlan = 0;
    $scope.internetConnectionVlan = false;
    $scope.appConnectionVlan = [];
    $scope.appConnectionVlanSelected = '';

    $scope.addVlan = function() {
    	$scope.vlans.push({	name: $scope.nameVlan,
    						numberOfUsers: parseInt($scope.numberOfUsersVlan),
    						internetConnection: $scope.internetConnectionVlan,
    						appConnection: $scope.appConnectionVlan});
      $scope.appConnectionVlan = [];
    

    }
    $scope.removeVlan = function(vlan) {
    	index = $scope.vlans.indexOf(vlan);
    	$scope.vlans.splice(index, 1);
    }

    $scope.appConnectionVlanAdd = function() {
    	 $scope.appConnectionVlan.push($scope.appConnectionVlanSelected);
    }

    $scope.submitted = 'no';

    $scope.submit = function() {
      $scope.teste = 1;
    }

    $scope.isSubmitted = function(submitted) {
      return submitted === $scope.submitted;
    }


});
