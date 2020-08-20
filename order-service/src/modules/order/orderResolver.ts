import { GraphQLResolverMap } from 'apollo-graphql'

const orderResolver: GraphQLResolverMap<any> = {
  Query: {
    orders: (parent, args, { orderService }, info) => {
      return orderService.fetchAll()
    }  
  }
}

export default orderResolver