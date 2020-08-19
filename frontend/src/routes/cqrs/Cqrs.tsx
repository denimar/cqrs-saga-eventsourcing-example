import React from 'react'
import { useQuery, gql } from '@apollo/client';
import CustomersCard from '../../components/CustomersCard';
import './Cqrs.scss'

interface ICustomerAddress {
  zipCode: string;
  street: string;
  state: string;
  city: string;
}

interface ICustomer {
  _id: string;
  phone: string;
  hiringDate: string;
  avatar: string;
  eyeColor: string;
  email: string;
  address: ICustomerAddress
  name: string;
  company: string;
  age: number;
  gender: string;
  salary: number;
}

const CUSTOMERS_QUERY = gql`
  query fetchCustomers {
    customers {
      _id
      phone
      hiringDate
      avatar
      eyeColor
      email
      address {
        zipCode
        street
        state
        city
      }
      name
      company
      age
      gender
      salary
    }
  }
`

const Cqrs: React.FC = () => {
  const { loading, error, data } = useQuery(CUSTOMERS_QUERY);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;  

  const customers: ICustomer[] = data['customers']

  return (
    <div>
      <CustomersCard customers={ customers } />
    </div>
  )
}

export default Cqrs