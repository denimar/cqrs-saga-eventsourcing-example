"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoNative_1 = require("../../util/mongoNative");
var fetchAll = function () {
    return mongoNative_1.customersCol.find().sort({ name: 0 }).toArray();
};
exports.default = {
    fetchAll: fetchAll
};
