"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var gateway_1 = require("@apollo/gateway");
var server = new apollo_server_1.ApolloServer({
    gateway: new gateway_1.ApolloGateway({
        serviceList: [
            //{ name: "customers", url: "http://localhost:8082" }, { name: "products", url: "http://localhost:8083" }, { name: "orders", url: "http://localhost:8084" },
            { name: "customer", url: "http://customer-service:8080" },
            { name: "inventory", url: "http://inventory-service:8080" },
            { name: "order", url: "http://order-service:8080" },
        ]
    }),
    // Apollo Graph Manager (previously known as Apollo Engine)
    // When enabled and an `ENGINE_API_KEY` is set in the environment,
    // provides metrics, schema management and trace reporting.
    //engine: false,
    // Subscriptions are unsupported but planned for a future Gateway version.
    subscriptions: false,
});
server.listen({ port: 8080 }).then(function (_a) {
    var url = _a.url;
    console.log("\uD83D\uDE80 API Gateway running at " + url);
});
