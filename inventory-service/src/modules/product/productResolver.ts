import { GraphQLResolverMap } from 'apollo-graphql'

const productResolver: GraphQLResolverMap<any> = {
  Query: {
    products: (parent, args, { productService }, info) => {
      return productService.fetchAll()
    }  
  }
}

export default productResolver