import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css'
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from 'react-router-dom';

import {GlobalStyles} from './global/global.styles'

import {firebase} from './lib/firebase.produc'

import {FirebaseContext} from './context/firebase.context'

ReactDOM.render(
  <FirebaseContext.Provider value= {{ firebase }}>
    <BrowserRouter>
        <GlobalStyles />
        <App /> 
    </BrowserRouter>
  </FirebaseContext.Provider>
,
  document.getElementById('root')
);


reportWebVitals();
