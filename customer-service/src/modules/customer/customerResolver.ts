import { GraphQLResolverMap } from 'apollo-graphql'

const customerResolver: GraphQLResolverMap<any> = {
  Query: {
    customers: (parent, args, { customerService }, info) => {
      return customerService.fetchAll()
    }  
  }
}

export default customerResolver