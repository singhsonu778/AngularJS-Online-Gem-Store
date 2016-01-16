(function() {
	var app = angular.module('productsStore', []);

	app.directive('productDescription', function() {
		return {
			restrict : 'E',
			templateUrl : 'templates/product-description.html'
		};
	});

	app.directive('productReview', function() {
		return {
			restrict : 'E',
			templateUrl : 'templates/product-review.html'
		};
	});

	app.directive("productSpecs", function() {
		return {
			restrict : 'A',
			templateUrl : "templates/product-specs.html"
		};
	});

	app.directive("productTabs", function() {
		return {
			restrict : 'E',
			templateUrl : "templates/product-tabs.html",
			controller : function() {
				this.tab = 1;
				this.isSet = function(checkTab) {
					return this.tab === checkTab;
				};
				this.setTab = function(setTab) {
					this.tab = setTab;
				};
			},
			controllerAs : 'panel'
		};
	});

	app.directive("productGallery", function() {
		return {
			restrict : 'E',
			templateUrl : "templates/product-gallery.html",
			controller : function() {
				this.current = 0;
				this.setCurrent = function(val) {
					this.current = val || 0;
				};
			},
			controllerAs : 'gallery'
		};
	});
})();
