"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var productResolver = {
    Query: {
        products: function (parent, args, _a, info) {
            var productService = _a.productService;
            return productService.fetchAll();
        }
    }
};
exports.default = productResolver;
