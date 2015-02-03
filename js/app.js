(function() {
var app = angular.module('store',[]);

app.controller('PanelController', function(){

	this.tab = 1;
	this.selectTab = function(setTab) {
		this.tab = setTab;
	};
	this.isSelected = function(checkTab) {
		return this.tab === checkTab;
	};

});

app.controller('GalleryController', function(){
    this.current = 0;
    this.setCurrent = function(newGallery){
      this.current = newGallery || 0;
    };
  });

app.controller('StoreController', function(){

	this.products = gems;

});

var gems = [
	{
		name: 'Item Name',
		price: 2,
		description: 'some kind of description goes here',
		images: [
	      "img/products/image-01.jpg",
	      "img/products/image-02.jpg",
	      "img/products/image-03.jpg",
	    ],
		canPurchase: true
	},
	{
		name: 'Item Name 2',
		price: 5.95,
		description: 'Another some kind of description goes here',
		images: [
	      "img/products/image-01.jpg",
	      "img/products/image-02.jpg",
	      "img/products/image-03.jpg",
	    ],
		canPurchase: true
	}
];

})();