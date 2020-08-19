"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = exports.resolvers = exports.typeDefs = void 0;
var graphql_tag_1 = __importDefault(require("graphql-tag"));
//TypeDefs
var productTypeDef_1 = __importDefault(require("./product/productTypeDef"));
//Resolvers
var productResolver_1 = __importDefault(require("./product/productResolver"));
//Services
var productService_1 = __importDefault(require("./product/productService"));
var root = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  scalar JSON\n  scalar Date\n  type jsonType {\n    jsonValue: JSON\n  }\n  type Query {\n    root: String\n  }\n  type Mutation {\n    root: String\n  }\n"], ["\n  scalar JSON\n  scalar Date\n  type jsonType {\n    jsonValue: JSON\n  }\n  type Query {\n    root: String\n  }\n  type Mutation {\n    root: String\n  }\n"])));
var typeDefs = [root, productTypeDef_1.default];
exports.typeDefs = typeDefs;
var resolvers = [productResolver_1.default];
exports.resolvers = resolvers;
var services = { productService: productService_1.default };
exports.services = services;
var templateObject_1;
