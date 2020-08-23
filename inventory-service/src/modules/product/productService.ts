import { productsCol } from "../../util/mongoNative"

const fetchAll = () => {
  console.log('got here')
  return productsCol.find().toArray()
}

export default {
  fetchAll
}