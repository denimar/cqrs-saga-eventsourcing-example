import { gql } from 'apollo-server'

//TypeDefs
import orderTypeDef from './order/orderTypeDef'

//Resolvers
import orderResolver from './order/orderResolver'

//Services
import orderService from './order/orderService'

const typeDefs =   orderTypeDef
const  resolvers = orderResolver
const services = { orderService }

export {
  typeDefs,
  resolvers,
  services
}