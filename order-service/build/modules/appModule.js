"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = exports.resolvers = exports.typeDefs = void 0;
//TypeDefs
var orderTypeDef_1 = __importDefault(require("./order/orderTypeDef"));
//Resolvers
var orderResolver_1 = __importDefault(require("./order/orderResolver"));
//Services
var orderService_1 = __importDefault(require("./order/orderService"));
var typeDefs = orderTypeDef_1.default;
exports.typeDefs = typeDefs;
var resolvers = orderResolver_1.default;
exports.resolvers = resolvers;
var services = { orderService: orderService_1.default };
exports.services = services;
