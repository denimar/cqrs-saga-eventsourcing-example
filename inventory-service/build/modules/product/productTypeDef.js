"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.default = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  extend type Query {\n    products: [ProductType]\n  }\n\n  type ProductStockType {\n    onHand: Float\n    reserved: Float\n  }\n\n  type ProductType {\n    _id: String\n    sku: String\n    title: String    \n    category: String\n    description: String\n    picture: String\n    price: Float\n    stock: ProductStockType\n  }\n"], ["\n  extend type Query {\n    products: [ProductType]\n  }\n\n  type ProductStockType {\n    onHand: Float\n    reserved: Float\n  }\n\n  type ProductType {\n    _id: String\n    sku: String\n    title: String    \n    category: String\n    description: String\n    picture: String\n    price: Float\n    stock: ProductStockType\n  }\n"])));
var templateObject_1;
