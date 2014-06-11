
(function(angular) {
	'use strict';

	var app = angular.module('MyStore');

	app.controller('HomeController', function($scope, ProductService) {

		$scope.featuredProducts = new Array();

		ProductService.getProducts().then(function(response) {

        	var products = response.data;

        	angular.forEach(products, function(product) {

        		if(product.isFeatured) {

                    $scope.featuredProducts.push(product);

                }
        	});
		});

		ProductService.getFeaturedProducts();
	});
})(window.angular);