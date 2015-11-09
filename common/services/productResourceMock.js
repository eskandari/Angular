(function () {
    "use strict";
    var app = angular
        .module("productResourceMock",
            ["ngMockE2E"]);

    app.run(function ($httpBackend) {
        var products = [{
            "productId": 1,
            "productName": "Esfehan Rug",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2009",
            "description": "Isfahan Rug made in Isfahan.",
            "cost": 9999.99,
            "price": 1299.99,
            "category": "persian",
            "tags": ["persian rug", "rug"],
            "imageUrl": "images/isfahanRug.jpg"
        }
                                , {
                                    "productId": 2,
                                    "productName": "Tabriz Rug",
                                    "productCode": "GDN-00112",
                                    "releaseDate": "March 20, 2009",
                                    "description": "Tabriz rug hand made in Tabriz city.",
                                    "cost": 8999.99,
                                    "price": 10999.99,
                                    "category": "persian",
                                    "tags": ["persain rug", "tabriz"],
                                    "imageUrl": "images/tabrizRug.jpeg"
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
                for (var i = 0; i < products.length; i++) {
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