(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductListCtrl", ProductListCtrl);

    function ProductListCtrl() {
        var vm = this;
        vm.test = "testi";
        vm.products =[{"productId":"1",
			"productName":"Tabriz Rug",
			"productCode":"Tb1054",
			"releaseDate":"March 19, 2015 ",
"imageUrl":"http://www.thefifthwall.biz/gallery_files/gallery/images/TFW%20007.jpg",
"price":"1202"
}];
        vm.showImage = false;
        vm.toggleImage = function () {
            vm.showImage = !vm.showImage;
        }
    }
}());
