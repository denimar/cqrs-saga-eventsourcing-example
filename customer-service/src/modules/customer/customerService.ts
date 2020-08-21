import { customersCol } from "../../util/mongoNative"

const fetchAll = () => {
  return customersCol.find().sort({ name: -1 }).toArray()
}

export default {
  fetchAll
}