import React from 'react';
import { Container,Background,Logo,ButtonLink } from './styles/header.styles';

import { Link } from 'react-router-dom';

const Header = ({bg=true, children, ...otherProps}) => {
    return ( 
        bg ? <Background {...otherProps}>{children}</Background> :children
     );
}
 
Header.Frame = function HeaderFrame({children, ...otherProps}){
    return <Container {...otherProps}>{children}</Container>
}
Header.Button = function HeaderButton({children, ...otherProps}){
    return <ButtonLink {...otherProps}>{children}</ButtonLink>
}

Header.Logo = function HeaderLogo({to, ...otherProps}){
    return (<Link to={to}>
        <Logo  {...otherProps}/>
    </Link>)
}

export default Header;