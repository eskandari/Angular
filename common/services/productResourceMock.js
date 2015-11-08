(function () {
    "use strict";
    var app = angular
        .module("productResourceMock",
            ["ngMockE2E"]);

    app.run(function ($httpBackend) {

        var products = [{
            "productId": 1,
            "productName": "Tabriz Rug",
            "productCode": "TRRG-0011",
            "releaseDate": "November 07, 2015",
            "description": "Tabriz Rug.",
            "cost": 5999.00,
            "price": 5999.00,
            "category": "furniture",
            "tags": ["rug", "indoor"],
            "imageUrl": "http://www.thefifthwall.biz/gallery_files/gallery/images/TFW%20007.jpg"
        }
                                , {
                                    "productId": 2,
                                    "productName": "Esfehan Rug",
                                    "productCode": "ESRG-87112",
                                    "releaseDate": "November 06, 2015",
                                    "description": "Esfehan Rug.",
                                    "cost": 9999.00,
                                    "price": 9999.00,
                                    "category": "furniture",
                                    "tags": ["rug", "indoor"],
                                    "imageUrl": "http://www.thefifthwall.biz/gallery_files/gallery/images/TFW%20005.jpg"
                                }];

        var productUrl = "/api/products"

        $httpBackend.whenGET(productUrl).respond(products);

        var editingRegex = new RegExp(productUrl + "/[0-9][0-9]*", '');
        $httpBackend.whenGET(editingRegex).respond(function (method,url, data) {
            var product = { "productId": 0 };
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];

            if (id>0) {
                for (var i = 0; i < produc.length; i++) {
                    if (products[i].productId == id) {
                        product = products[i];
                        break;
                    }
                };
            }

            return [200, product, {}];
        });

        $httpBackend.whenPOST(productUrl).respond(function (method, url, data) {
            var product = angular.fromJson(data);
            if (!product.Id) {
                product.productId = products[products.length - 1].productId + 1;
                products.push(product);
            }
            else {
                for (var i = 0; i < products.length; i++) {
                    if (products[i].productId == product.productId) {
                        product[i] = product;
                        break;
                    }
                };
            }

            return [200, product, {}];
        });

        $httpBackend.whenGET(/app/).passThrough();

    })

}());
