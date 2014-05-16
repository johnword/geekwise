(function(angular) {
	'use strict';

	var app = angular.module('MyStore');

	app.controller('ProductList', function($scope, $http) {

		$http.get('assets/json/products.json')
			.then(
				function(response){
					$scope.products = response.data;
				},
				function(reason) {
					$scope.errorMessage = reason.statusText;
				}
			);

		$http.get('assets/json/product-filters.json')
			.then(
				function(response) {
					$scope.filters = response.data;
				}
			);
			//executed possibly before http completes
	});

})(window.angular);