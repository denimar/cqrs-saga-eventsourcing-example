"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoNative_1 = require("../../util/mongoNative");
var fetchAll = function () {
    return mongoNative_1.ordersCol.find().sort({ name: 1 }).toArray();
};
exports.default = {
    fetchAll: fetchAll
};
