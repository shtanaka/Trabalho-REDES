var app = angular.module('TrabalhoRedes', []);

app.controller('formCtrl', function($scope) {
    $scope.existsServer = 'no';
    $scope.teste = 0;
    $scope.isShownApp = function(existsServer) {
        return existsServer === $scope.existsServer;
    };

    $scope.floor = "Haverá um switch para todos os usuários internos. Cabeamento RJ45 para conexão local do andar";

    $scope.enableConnection = 'no';
    $scope.isShownConnectivity = function(enableConnection) {
        return enableConnection === $scope.enableConnection;
    };

   	$scope.apps = [];
    $scope.localApps = [];
    $scope.remoteApps = [];
   	$scope.nameApp = '';
   	$scope.networkApp = false;
   	$scope.remoteApp = false;

   	$scope.addApp = function() {
   		$scope.apps.push({name: $scope.nameApp,
   						  accessNetwork: $scope.networkApp,
   						  accessRemote: $scope.remoteApp});
      if($scope.networkApp == true ) {
        $scope.localApps.push($scope.nameApp);
      }
        
      if($scope.remoteApp == true ){
        $scope.remoteApps.push($scope.nameApp);
      }
        
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
      maska = "";
      zeros = Math.ceil(Math.log2(parseInt($scope.numberOfUsersVlan))); 
      for(var i = 0; i < 32; i++) {
        if(i < 32 - zeros) {
          maska = maska + "1";
        } else {
          maska = maska + "0";
        }
        if(i % 8 == 7) {
          maska = maska + ".";
        }
      }
    	$scope.vlans.push({	name: $scope.nameVlan,
    						numberOfUsers: parseInt($scope.numberOfUsersVlan),
    						internetConnection: $scope.internetConnectionVlan,
    						appConnection: $scope.appConnectionVlan,
                mask : maska
                });
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
