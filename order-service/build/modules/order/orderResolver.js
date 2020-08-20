"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var orderResolver = {
    Query: {
        orders: function (parent, args, _a, info) {
            var orderService = _a.orderService;
            return orderService.fetchAll();
        }
    }
};
exports.default = orderResolver;
