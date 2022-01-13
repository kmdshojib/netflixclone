import React from 'react';
import Home from './pages/homepage';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Browse from './pages/browse';

import {Route, Routes } from 'react-router-dom'

import * as ROUTES from './components/constants/router';


//styles 


const App = () => {
  return (
   <Routes>
      <Route exact path={ROUTES.HOME} element={<Home />}/>
      <Route  path={ROUTES.SIGN_IN} element={<SignIn />} />
      <Route  path={ROUTES.SIGN_UP} element={<SignUp />} />
      <Route  path={ROUTES.BROWSE} element={<Browse />} />
      
   </Routes>
  )
}

export default App;
