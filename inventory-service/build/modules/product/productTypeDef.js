"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
exports.default = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  extend type Query {\n    products: [Product]\n  }\n\n  type ProductStockType {\n    onHand: Float\n    reserved: Float\n  }\n\n  type Product @key(fields: \"_id\") {\n    _id: ID!\n    sku: String\n    title: String    \n    category: String\n    description: String\n    picture: String\n    price: Float\n    stock: ProductStockType\n  }\n"], ["\n  extend type Query {\n    products: [Product]\n  }\n\n  type ProductStockType {\n    onHand: Float\n    reserved: Float\n  }\n\n  type Product @key(fields: \"_id\") {\n    _id: ID!\n    sku: String\n    title: String    \n    category: String\n    description: String\n    picture: String\n    price: Float\n    stock: ProductStockType\n  }\n"])));
var templateObject_1;
