interface ICustomerAddress {
  zipCode: string;
  street: string;
  state: string;
  city: string;
}

interface ICustomer {
  _id: string;
  phone: string;
  avatar: string;
  email: string;
  address: ICustomerAddress
  name: string;
  age: number;
}

export default ICustomer

