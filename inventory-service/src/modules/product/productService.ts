import { productsCol } from "../../util/mongoNative"

const fetchAll = () => {
  return productsCol.find().toArray()
}

export default {
  fetchAll
}