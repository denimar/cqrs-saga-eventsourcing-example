import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers, services } from "../modules/appModule";
import logger from './logger'

const createApolloServer = () => {
  const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    context: async ({ req, res  }) => {
      return {
        ...services
      }
    },
    logger: {
      info: (message: string) => console.log('Denimar info : ' + message),
      debug: (message: string) => console.log('Denimar debug: ' + message),
      warn: (message: string) => console.log('Denimar warn: ' + message),
      error: (message: string) => console.log('Denimar error: ' + message),
    },
    debug: true
  });

  const port = process.env.PORT || 8080
  server.listen({ port }).then(({ url }) => {
    logger.info(`🚀  Server running at ${url}`);
  });
}

export default createApolloServer