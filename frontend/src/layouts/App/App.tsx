import React, { useContext, useState } from 'react';
import './App.scss';
import AppHeader from '../AppHeader';
import SideBarMenu from '../SideBarMenu';
import { ApolloClient, ApolloProvider, NormalizedCacheObject } from '@apollo/client';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppContext from '../../contexts/AppContext';
import Dashboard from '../../routes/dashboard';
import Cqrs from '../../routes/cqrs';

interface IAppProps {
  graphQlClient: ApolloClient<NormalizedCacheObject>
}

const App: React.FC<IAppProps>  = ({ graphQlClient }) => {
  const [ isSideBarMenuOpen, setSideBarMenuOpen ] = useState(true)
  return (
    <ApolloProvider client={ 
        graphQlClient
      }>
      <AppContext.Provider value={{ 
        graphQlClient
      }}>
        <div className="app-container">
          <AppHeader title="dsfafjdslkfjds çfjads" isSideBarMenuOpen={ isSideBarMenuOpen } setSideBarMenuOpen={ setSideBarMenuOpen } />
          <div className="app-body-cointainer">
            <Router>
              <SideBarMenu isOpen={ isSideBarMenuOpen } />
              <div className="app-body">
                <Switch>
                  <Route path="/dashboard">
                    <Dashboard />
                  </Route>                
                  <Route path="/cqrs"> 
                    <Cqrs />
                  </Route>                
                  <Route path="/customers"> 
                    <div>Todo: Implement Customers Here in React</div>
                  </Route>                
                  <Route path="/products"> 
                    <div>Todo: Implement Products Here in Vue</div>                  
                  </Route>                
                  <Route path="/orders">
                    <div>Todo: Implement Orders Here in Angular</div>
                  </Route>                              
                </Switch>  
              </div>
            </Router>
          </div>
        </div>
      </AppContext.Provider>  
    </ApolloProvider> 
  );
}

export default App;
