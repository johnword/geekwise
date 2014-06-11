(function(angular) {
	"use strict";

	var app = angular.module('MyStore');

	app.factory('ProductService', function($http){
		//Angular factories return service objects
		return {
			//Object literal
			getProduct: function(guid) {
				//Return the promise
				return $http.get('/api/product/'+guid);
			},	
			getProducts: function() {
				//Return the promise
				return $http.get('/api/products');
			},
			getProductFilters: function() {
				//Return the promise
				return $http.get('assets/json/product-filters.json');
			},
			getFeaturedProducts: function() {
				//Return the promise
				return $http.get('api/products/featured');
			}
		}

	});

})(window.angular);