import React from 'react'
import { useQuery, gql, ApolloError } from '@apollo/client';
import IProduct from './IProduct';

interface IUseProductsReturn {
  loadingProducts: boolean;    
  errorFetchingProducts?: ApolloError;
  products: IProduct[];
}

const PRODUCTS_QUERY = gql`
  query fetchProduct {
    products {
      _id
      sku
      title
      picture
      price
      stock {
        onHand
        reserved
      }
    }
  }
`

const useProducts: () => IUseProductsReturn = () => {
  const { loading, error, data = { products: [] } } = useQuery(PRODUCTS_QUERY);
  return {
    loadingProducts: loading, 
    errorFetchingProducts: error,
    products: data['products']
  }  
}

export default useProducts