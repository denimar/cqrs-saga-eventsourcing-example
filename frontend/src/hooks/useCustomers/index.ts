import React from 'react'
import { useQuery, gql, ApolloError } from '@apollo/client';
import ICustomer from './ICustomer';

  interface IUseConstomersReturn {
    loadingCustomers: boolean;    
    errorFetchingCustomers?: ApolloError;
    customers: ICustomer[];
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

const useCustomers: () => IUseConstomersReturn = () => {
  const { loading, error, data = { customers: [] } } = useQuery(CUSTOMERS_QUERY);
  return {
    loadingCustomers: loading, 
    errorFetchingCustomers: error,
    customers: data['customers']
  }  
}

export default useCustomers