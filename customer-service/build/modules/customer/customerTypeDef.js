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
exports.default = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  extend type Query {\n    customers: [CustomerType]\n  }\n\n  type AddressType {\n    zipCode: String\n    street: String\n    state: String\n    city: String\n  }\n\n  type CustomerType {\n    _id: String\n    phone: String\n    hiringDate: String\n    avatar: String\n    eyeColor: String\n    email: String\n    address: AddressType\n    name: String\n    company: String\n    age: Int\n    gender: String\n    salary: Float\n  }\n"], ["\n  extend type Query {\n    customers: [CustomerType]\n  }\n\n  type AddressType {\n    zipCode: String\n    street: String\n    state: String\n    city: String\n  }\n\n  type CustomerType {\n    _id: String\n    phone: String\n    hiringDate: String\n    avatar: String\n    eyeColor: String\n    email: String\n    address: AddressType\n    name: String\n    company: String\n    age: Int\n    gender: String\n    salary: Float\n  }\n"])));
var templateObject_1;
