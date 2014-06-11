(function(angular) {
	"use strict";
 
	var app = angular.module('MyStore');
 
	// Inject in the CartService
	app.directive('msMiniCart', function() {
 
		return {
			scope: {
			},
			restrict: 'E',
			replace: true,
			templateUrl: 'templates/mini-cart.html',
			link: function(scope, elem, attr) {
 
				scope.cartSubtotal = function() {
					// Returns the subtotal form the CartService
 
				};
 
				scope.itemCount = function() {
					// Return the item count from the CartService
					return 1; // static value to display cart temporarily
				};
			}
 
		};
	});
 
})(window.angular);