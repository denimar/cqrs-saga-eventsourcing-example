"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var productResolver = {
    Query: {
        customers: function (parent, args, _a, info) {
            var customerService = _a.customerService;
            return customerService.fetchAll();
        }
    }
};
exports.default = productResolver;
