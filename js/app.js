var speciesService = angular.module("speciesService", ["ngRoute","speciesCtrl"]);

speciesService.config(["$routeProvider", function($routeProvider){
	$routeProvider.
	when("/:key",{
		templateUrl: "detalleSpecie.html",
		controller: "detailSpecieCtrl"
	}).
	otherwise({
		redirecTo: "/"
	});

}]);
