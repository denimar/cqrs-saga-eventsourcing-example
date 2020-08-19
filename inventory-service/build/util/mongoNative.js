"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoNativeConnect = exports.productsCol = exports.mongoDb = void 0;
var mongodb_1 = require("mongodb");
var logger_1 = __importDefault(require("./logger"));
var mongoDb;
exports.mongoDb = mongoDb;
var productsCol;
exports.productsCol = productsCol;
var mongoNativeConnect = function (pid, onConnect) {
    var _a = process.env, MONGODB_USER = _a.MONGODB_USER, MONGODB_PASSWORD = _a.MONGODB_PASSWORD, MONGODB_HOST = _a.MONGODB_HOST, MONGODB_PORT = _a.MONGODB_PORT, MONGODB_DATABASE = _a.MONGODB_DATABASE;
    var mongoURI = "mongodb+srv://" + MONGODB_USER + ":" + MONGODB_PASSWORD + "@" + MONGODB_HOST;
    mongodb_1.MongoClient.connect(mongoURI, { useUnifiedTopology: true }, function (err, client) {
        if (err) {
            logger_1.default.error('Connection to native mongo failed ' + err);
            if (client)
                return client.close();
            return;
        }
        logger_1.default.info("MongoDB connected to " + MONGODB_HOST + "/" + MONGODB_DATABASE + " on PID " + pid);
        exports.mongoDb = mongoDb = client.db(MONGODB_DATABASE);
        exports.productsCol = productsCol = mongoDb.collection('products');
        onConnect();
    });
};
exports.mongoNativeConnect = mongoNativeConnect;
