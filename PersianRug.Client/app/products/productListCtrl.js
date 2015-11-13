(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductListCtrl",
                    ["productResource",
                        ProductListCtrl]);

    function ProductListCtrl(productResource) {
        var vm = this;
        vm.searchCriteria = "PRI";
        //1.Sample one
        //productResource.query({search:vm.searchCriteria}, function(data) {

        //2.second sample for more complex scenario
        //productResource.query({
        //     $filter: "contains(ProductCode, '" + searchCriteria + "')" +
        //     " or  contains(ProductName, '" + vm.searchCriteria + "')" ,
        //     $orderby: vm.sortProperty + " " + vm.sortDirection
        //}, function(data) {

        productResource.query({$filter:"contains(ProductCode,'PRI')",$skip:1, $top:3}, function (data) {
            vm.products = data;
        });
        vm.showImage = false;

        vm.toggleImage = function() {
            vm.showImage = !vm.showImage;
        }
    }
}());
