(function(){
	"use strict";

	angular
	.module("common.services")
	.factory("productResource",
		["$resource", productResource]);

	function($resource){
		return $resource("/api/products/:productId");
	}
}());
