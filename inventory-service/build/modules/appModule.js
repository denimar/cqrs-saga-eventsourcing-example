"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = exports.resolvers = exports.typeDefs = void 0;
//TypeDefs
var productTypeDef_1 = __importDefault(require("./product/productTypeDef"));
//Resolvers
var productResolver_1 = __importDefault(require("./product/productResolver"));
//Services
var productService_1 = __importDefault(require("./product/productService"));
var typeDefs = productTypeDef_1.default;
exports.typeDefs = typeDefs;
var resolvers = productResolver_1.default;
exports.resolvers = resolvers;
var services = { productService: productService_1.default };
exports.services = services;
