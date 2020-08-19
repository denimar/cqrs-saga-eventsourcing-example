import gql from 'graphql-tag';

export default gql`
  extend type Query {
    products: [ProductType]
  }

  type ProductStockType {
    onHand: Float
    reserved: Float
  }

  type ProductType {
    _id: String
    sku: String
    title: String    
    category: String
    description: String
    picture: String
    price: Float
    stock: ProductStockType
  }
`