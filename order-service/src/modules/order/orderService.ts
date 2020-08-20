import { ordersCol } from "../../util/mongoNative"

const fetchAll = () => {
  return ordersCol.find().sort({ name: 1 }).toArray()
}

export default {
  fetchAll
}