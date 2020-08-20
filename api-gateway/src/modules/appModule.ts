import gql from 'graphql-tag';

//TypeDefs
import productTypeDef from './product/productTypeDef'

//Resolvers
import productResolver from './product/productResolver'

//Services
import productService from './product/productService'

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

const typeDefs =   [ root, productTypeDef ]
const  resolvers = [ productResolver ]
const services = { productService }

export {
  typeDefs,
  resolvers,
  services
}