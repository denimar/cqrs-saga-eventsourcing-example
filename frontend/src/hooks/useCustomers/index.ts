import { useQuery, gql } from '@apollo/client';

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
  
  const CUSTOMERS_QUERY = gql`
    query fetchCustomers {
      customers {
        _id
        phone
        avatar
        email
        address {
          zipCode
          street
          state
          city
        }
        name
        age
      }
    }
  `

const useConstomers = () => {
  const { loading, error, data } = useQuery(CUSTOMERS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{ `Error: ${error.message}`}</p>;  

  const customers: ICustomer[] = data['customers']
}

export default useCustomers