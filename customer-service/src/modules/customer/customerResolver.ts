import { IResolvers } from "apollo-server"

const productResolver: IResolvers = {
  Query: {
    customers: (parent, args, { customerService }, info) => {
      return customerService.fetchAll()
    }  
  }
}

export default productResolver