import React from 'react'
import { useQuery, gql } from '@apollo/client';
import './Cqrs.scss'
import ItemsCard from '../../components/ItemsCard';

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

const Cqrs: React.FC = () => {
  const { loading, error, data } = useQuery(CUSTOMERS_QUERY);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{ `Error: ${error.message}`}</p>;  

  const customers: ICustomer[] = data['customers']

  return (
    <div>
      <ItemsCard title="Customers" items={ customers } itemRenderer={ (customer: ICustomer) => {
          const { _id, avatar, name } = customer
          return (
            <>
            <img src={ avatar } alt="avatar" />
            <span className="customers-card-name">{ name }</span>
            </>
          )
        }} 
      />
    </div>
  )
}

export default Cqrs