import { gql } from 'apollo-server'

export default gql`
  extend type Query {
    orders: [Order]
  }

  type OrderItemType {
    product: String
  }

  type Order @key(fields: "_id") {
    _id: ID!
    transaction: String    
    items: [OrderItemType]
    customer: String
    state: String
  }
`