"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoNative_1 = require("./util/mongoNative");
var createApolloServer_1 = __importDefault(require("./util/createApolloServer"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
mongoNative_1.mongoNativeConnect(process.pid, function () { return createApolloServer_1.default(); });
