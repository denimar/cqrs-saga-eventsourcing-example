import { gql, IResolvers } from 'apollo-server'

//TypeDefs
import productTypeDef from './product/productTypeDef'

//Resolvers
import productResolver from './product/productResolver'

//Services
import productService from './product/productService'

const typeDefs = productTypeDef
const  resolvers = productResolver
const services = { productService }

export {
  typeDefs,
  resolvers,
  services
}