import { ApolloServer } from 'apollo-server'
import { ApolloGateway } from '@apollo/gateway'

const server = new ApolloServer({
  gateway: new ApolloGateway({
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

server.listen({ port: 8080 }).then(({ url }) => {
  console.log(`🚀 API Gateway running at ${url}`);
});
