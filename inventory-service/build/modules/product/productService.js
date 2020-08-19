"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoNative_1 = require("../../util/mongoNative");
var fetchAll = function () {
    return mongoNative_1.productsCol.find().toArray();
};
exports.default = {
    fetchAll: fetchAll
};
