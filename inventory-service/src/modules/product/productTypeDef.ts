import { gql } from 'apollo-server'

export default gql`
  extend type Query {
    products: [Product]
  }

  type ProductStockType {
    onHand: Float
    reserved: Float
  }

  type Product @key(fields: "_id") {
    _id: ID!
    sku: String
    title: String    
    category: String
    description: String
    picture: String
    price: Float
    stock: ProductStockType
  }
`