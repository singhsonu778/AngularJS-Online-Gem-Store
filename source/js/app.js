(function() {
	var gems = [
		{
			name : 'Azurite',
			price : 2.95,
			canPurchase: true,
			soldOut: false
		},
		{
			name : 'Stone',
			price : 5.95,
			canPurchase: false,
			soldOut: false
		},
		{
			name : 'Diamond',
			price : 8.95,
			canPurchase: true,
			soldOut: false
		}
	];

	var app = angular.module('gemStore', []);
	
	app.controller('StoreController', function() {
		this.products = gems;
	});
})();
