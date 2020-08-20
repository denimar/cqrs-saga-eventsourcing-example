import { gql } from 'apollo-server'

//TypeDefs
import customerTypeDef from './customer/customerTypeDef'

//Resolvers
import customerResolver from './customer/customerResolver'

//Services
import customerService from './customer/customerService'

const typeDefs =   customerTypeDef
const  resolvers = customerResolver
const services = { customerService }

export {
  typeDefs,
  resolvers,
  services
}