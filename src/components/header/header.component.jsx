import React from 'react';
import Header from './header.index'

import * as ROUTES from '../../components/constants/router'

import logo from '../../assets/logo/logo.svg'

const HeaderContainer = ({children}) => {
    return ( 
        <Header>
            <Header.Frame>
               <Header.Logo to={ROUTES.HOME}  alt="Netflix" src={logo}/>
               <Header.Button to={ROUTES.SIGN_IN}>Sign In</Header.Button>
            </Header.Frame>
            {children}
        </Header>
     );
}
 
export default HeaderContainer;