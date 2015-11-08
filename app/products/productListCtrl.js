(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductListCtrl", 
			["productResource", ProductListCtrl]);

    function ProductListCtrl(productResource) {
        var vm = this;
        vm.test = "testi";
	productResource.query(function(data){
				vm.products = data;
				});

/*   
     vm.products =[{"productId":"1",
			"productName":"Tabriz Rug",
			"productCode":"Tb1054",
			"releaseDate":"March 19, 2015 ",
"imageUrl":"http://www.thefifthwall.biz/gallery_files/gallery/images/TFW%20007.jpg",
"price":"1202"
}];
*/

        vm.showImage = false;
        vm.toggleImage = function () {
            vm.showImage = !vm.showImage;
        }
    }
}());
