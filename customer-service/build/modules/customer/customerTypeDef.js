"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
exports.default = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  extend type Query {\n    customers: [Customer]\n  }\n\n  type AddressType {\n    zipCode: String\n    street: String\n    state: String\n    city: String\n  }\n\n  type Customer @key(fields: \"_id\") {\n    _id: ID!\n    name: String    \n    email: String    \n    phone: String\n    avatar: String\n    address: AddressType\n    age: Int\n  }\n"], ["\n  extend type Query {\n    customers: [Customer]\n  }\n\n  type AddressType {\n    zipCode: String\n    street: String\n    state: String\n    city: String\n  }\n\n  type Customer @key(fields: \"_id\") {\n    _id: ID!\n    name: String    \n    email: String    \n    phone: String\n    avatar: String\n    address: AddressType\n    age: Int\n  }\n"])));
var templateObject_1;
