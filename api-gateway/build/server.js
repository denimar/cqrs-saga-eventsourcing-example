"use strict";
var ApolloServer = require("apollo-server").ApolloServer;
var ApolloGateway = require("@apollo/gateway").ApolloGateway;
var server = new ApolloServer({
    gateway: new ApolloGateway({
        serviceList: [
            //{ name: "customers", url: "http://localhost:8082" },
            //{ name: "products", url: "http://localhost:8083" },
            { name: "orders", url: "http://localhost:8084" },
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
    console.log("\uD83D\uDE80 Server ready at " + url);
});
