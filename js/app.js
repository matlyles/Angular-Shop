(function() {
var app = angular.module('store',[]);

// var gem = {
// 	name: 'Item Name',
// 	price: 2.95,
// 	description: 'some kind of description goes here'
// }


app.controller('StoreController', function(){

	this.product = gem;

});

var gem = {
	name: 'Item Name',
	price: 2.95,
	description: 'some kind of description goes here',
	canPurchase: true
}

})();