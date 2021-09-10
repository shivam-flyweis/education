import React from 'react';
import {Provider} from 'react-redux';
import jwt from 'jsonwebtoken';
import store from './redux/store';
import {setCurrentUser, signOut} from './redux';
import setAuthorizationToken from './redux/actions/setAuthorization';
import Main from './App';


function App() {
  if(localStorage.etoken){
    setAuthorizationToken(localStorage.etoken);
    jwt.verify(localStorage.etoken, 'secretboot', function(err, decode) {
      if(err){
        store.dispatch(signOut());     
      }else{
        store.dispatch(setCurrentUser(decode));
      }
    });
  }
  
  return (
    <>
    <Provider store={store}>
      <Main/>
    </Provider>
    </>
  );
}

export default App;
