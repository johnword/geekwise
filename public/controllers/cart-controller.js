(function(angular) {
 
    var app = angular.module('MyStore');
 
	// Inject in the CartService
    app.controller('CartController', function($scope, CartService) {
 
	    // Set the items on the scope to the items in the CartService
	    $scope.items = CartService.getItems();
 
	    $scope.addItem = CartService.addItem;

	    $scope.getItemCount = CartService.getItemCount;
 
	    $scope.removeItem = CartService.removeItem;
 
	    $scope.getCartSubtotal = CartService.getCartSubtotal;
 
	    $scope.getCartTotal = CartService.getCartTotal;
 
    });
 
})(window.angular);