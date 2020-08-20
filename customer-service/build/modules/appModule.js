"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = exports.resolvers = exports.typeDefs = void 0;
//TypeDefs
var customerTypeDef_1 = __importDefault(require("./customer/customerTypeDef"));
//Resolvers
var customerResolver_1 = __importDefault(require("./customer/customerResolver"));
//Services
var customerService_1 = __importDefault(require("./customer/customerService"));
var typeDefs = customerTypeDef_1.default;
exports.typeDefs = typeDefs;
var resolvers = customerResolver_1.default;
exports.resolvers = resolvers;
var services = { customerService: customerService_1.default };
exports.services = services;
