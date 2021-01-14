
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './auth/login';


function App() {
  return (
   <Switch>
     <Route path="/" component={LoginPage}/>
     </Switch>
  );
}

export default App;
