(function(angular) {
	'use strict';

	var app = angular.module('MyStore');

	app.directive('msProductDetailsButton', function() {

		return {
			// E for Element
			// A for Attribute
			// C for Class
			scope: {
				// 3 types of bindings for scope properties
				// @ which is a string
				// & which is a one-way binding
				// = which is a two-way binding
				productId: '@productId' //product-id
			}, // Isolated scope
			restrict: 'E',
			replace: true,
			templateUrl: 'templates/product-details-button.html',
			link: function(scope, elem, attrs) {
 
			}
		};
	});

})(window.angular);