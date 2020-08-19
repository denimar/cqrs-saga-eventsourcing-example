import { IResolvers } from "apollo-server"

const productResolver: IResolvers = {
  Query: {
    products: (parent, args, { productService }, info) => {
      return productService.fetchAll()
    }  
  }
}

export default productResolver