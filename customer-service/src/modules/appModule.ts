import gql from 'graphql-tag';

//TypeDefs
import customerTypeDef from './customer/customerTypeDef'

//Resolvers
import customerResolver from './customer/customerResolver'

//Services
import customerService from './customer/customerService'

const root = gql`
  scalar JSON
  scalar Date
  type jsonType {
    jsonValue: JSON
  }
  type Query {
    root: String
  }
  type Mutation {
    root: String
  }
`

const typeDefs =   [ root, customerTypeDef ]
const  resolvers = [ customerResolver ]
const services = { customerService }

export {
  typeDefs,
  resolvers,
  services
}