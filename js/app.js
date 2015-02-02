(function() {
var app = angular.module('store',[]);

// var gem = {
// 	name: 'Item Name',
// 	price: 2.95,
// 	description: 'some kind of description goes here'
// }


app.controller('StoreController', function(){

	this.products = gems;

});

var gems = [
	{
		name: 'Item Name',
		price: 2,
		description: 'some kind of description goes here',
		images: [
			{
				full: 'image-01-full.jpg',
				thumb: 'image-01-thumb.jpg'
			}
		],
		canPurchase: true
	},
	{
		name: 'Item Name 2',
		price: 5.95,
		description: 'Another some kind of description goes here',
		images: [
			{
				full: 'image-01-full.jpg',
				thumb: 'image-01-thumb.jpg'
			}
		],
		canPurchase: true
	}
];

})();