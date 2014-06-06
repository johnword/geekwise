(function(angular) {
    "use strict";
 
    var app = angular.module('MyStore');
 
    app.controller('ProductDetail', function($scope, $stateParams, ProductService) {
 
        // Set the id from the $stateParams to a local product_guid variable
        var product_guid = $stateParams.id;
 
        $scope.featuredProducts = [];
 
        ProductService.getProduct(product_guid).then(function(response) {
            $scope.product = response.data;
        });
 
        // Get the products from the product service
        ProductService.getProducts().then(function(response) {
 
            // Add the resulting array of products to a local products variable
            var products = response.data;
 
            // Loop through the products array using Angular's built-in forEach function
            angular.forEach(products, function(product) {
 
                if(product.guid !== product_guid && product.isFeatured) {
 
                    // Add the featured product to the featuredProducts array
                    $scope.featuredProducts.push(product);
                }
 
            });
        });
 
    });
 
})(window.angular);