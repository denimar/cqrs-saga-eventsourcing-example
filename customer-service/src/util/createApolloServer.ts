import { ApolloServer } from 'apollo-server'
import { buildFederatedSchema } from '@apollo/federation';
import { typeDefs, resolvers, services } from "../modules/appModule";

const createApolloServer = () => {
  const server = new ApolloServer({ 
    schema: buildFederatedSchema([{
      typeDefs, 
      resolvers,
    }]),
    context: async () => {
      return {
        ...services
      }
    },
    logger: {
      info: (message: string) => console.log('Denimar info : ' + message),
      debug: (message: string) => console.log('Denimar debug: ' + message),
      warn: (message: string) => console.log('Denimar warn: ' + message),
      error: (message: string) => console.log('Denimar error: ' + message),
    }
  });

  const port = process.env.PORT || 8080
  server.listen({ port }).then(({ url }) => {
    console.log(`🚀 Customer Service running at: ${url}`);
  });  
}

export default createApolloServer