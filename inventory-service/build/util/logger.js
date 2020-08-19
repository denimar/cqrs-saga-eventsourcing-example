"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var info = function (message) {
    console.log(message);
};
var warn = function (message) {
    console.warn(message);
};
var error = function (message) {
    console.error(message);
};
exports.default = {
    info: info,
    warn: warn,
    error: error
};
