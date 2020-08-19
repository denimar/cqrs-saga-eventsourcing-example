import gql from 'graphql-tag';

export default gql`
  extend type Query {
    customers: [CustomerType]
  }

  type AddressType {
    zipCode: String
    street: String
    state: String
    city: String
  }

  type CustomerType {
    _id: String
    phone: String
    hiringDate: String
    avatar: String
    eyeColor: String
    email: String
    address: AddressType
    name: String
    company: String
    age: Int
    gender: String
    salary: Float
  }
`