import { gql } from 'apollo-server'

export default gql`
  extend type Query {
    customers: [Customer]
  }

  type AddressType {
    zipCode: String
    street: String
    state: String
    city: String
  }

  type Customer @key(fields: "_id") {
    _id: ID!
    name: String    
    email: String    
    phone: String
    avatar: String
    address: AddressType
    age: Int
  }
`