var speciesCtrl = angular.module("speciesCtrl",[]);

speciesCtrl.controller("listSpeciesCtrl", ["$scope","$http","$routeParams",function($scope,$http,$routeParams){

		var url = "http://api.gbif.org/v1/species/";
		$http.get(url).success(function(data){
			$scope.species = data;
		});
}]);

speciesCtrl.controller("detailSpecieCtrl",["$scope", "$http","$routeParams",function($scope,$http,$routeParams){
		var urlDetalles = "http://api.gbif.org/v1/species/" + $routeParams.key;
		$http.get(urlDetalles).success(function(datos){
			$scope.detailSpecie = datos;
		});

}]);
