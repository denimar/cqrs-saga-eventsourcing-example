import { customersCol } from "../../util/mongoNative"

const fetchAll = async () => {
  const items = await customersCol
    .find()
    .sort({ name: 1 })
    .toArray()

  return items.splice(0, 2)  
}

export default {
  fetchAll
}