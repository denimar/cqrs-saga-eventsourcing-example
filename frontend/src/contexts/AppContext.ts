import React from 'react'
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

interface IAppContextProps {
  graphQlClient: ApolloClient<NormalizedCacheObject>
}

export default React.createContext<Partial<IAppContextProps>>({})