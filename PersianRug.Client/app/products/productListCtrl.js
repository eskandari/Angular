(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductListCtrl",
                    ["$state","productResource",
                        ProductListCtrl]);

    function ProductListCtrl($state, productResource) {
        var vm = this;
        vm.searchCriteria = "PRI";
        vm.searchTerm = "";
        vm.sort = function (sortColumn) {
            if (vm.sortDirection == " desc") {
                vm.sortDirection = " asc";
            }
            else {
                vm.sortDirection = " desc";
            }
            vm.sortProperty = sortColumn;
            productResource.query({$orderby: vm.sortProperty + vm.sortDirection }, function (data) {
                vm.products = data;
            });
        }
        vm.sortProperty = "ProductName";
        vm.sortDirection = " desc";

        //1.Sample one
        //productResource.query({search:vm.searchCriteria}, function(data) {

        //2.second sample for more complex scenario
        //productResource.query({
        //     $filter: "contains(ProductCode, '" + searchCriteria + "')" +
        //     " or  contains(ProductName, '" + vm.searchCriteria + "')" ,
        //     $orderby: vm.sortProperty + " " + vm.sortDirection
        //}, function(data) {
        
        //3.
        //productResource.query({ $filter: "contains(ProductCode,'PRI')", $orderby: vm.sortProperty + vm.sortDirection }, function (data) {

        productResource.query({ $orderby: vm.sortProperty + vm.sortDirection }, function (data) {
            vm.products = data;
        });

        vm.showImage = false;

        vm.toggleImage = function () {
            vm.showImage = !vm.showImage;
        };

        vm.search = function (searchTerm) {
            productResource.query({ $filter: "contains(ProductName, '" + vm.searchTerm + "')", $orderby: vm.sortProperty + vm.sortDirection }, function (data) {
                vm.products = data;
            });

        }

    }
}());