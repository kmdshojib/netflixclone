import React from 'react';
import Home from './pages/homepage';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Browse from './pages/browse';

import {Route, Routes } from 'react-router-dom'

import * as ROUTES from './components/constants/router';

import {IsUserNavigate , ProtectedNavigate} from './Helpers/routes'


//styles 


const App = () => {
  const user ={}
  return (
   <Routes>
      <Route  path={ROUTES.SIGN_IN} element={<IsUserNavigate  user={!user} loggedInPath={ROUTES.BROWSE}>
        <SignIn />
      </IsUserNavigate>}/>
      
      <Route path={ROUTES.SIGN_UP} element={<IsUserNavigate  user={!user} loggedInPath={ROUTES.BROWSE}>
        <SignUp />
      </IsUserNavigate>}/>

      <Route path={ROUTES.BROWSE} element={<ProtectedNavigate  user={user} loggedInPath={ROUTES.SIGN_IN}>
        <Browse />
      </ProtectedNavigate>}/>

      

      {/* <Route exact path={ROUTES.HOME} element={<Home />}/> */}
      
      <Route exact path={ROUTES.HOME} element={<IsUserNavigate loggedInPath={ROUTES.BROWSE}>
        <Home />
      </IsUserNavigate>}/>
   </Routes>
  )
}

export default App;
