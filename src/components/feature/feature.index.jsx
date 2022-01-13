import React from 'react';
import {Container, Title, SubTitle} from './styles/feature.styles'

const Feature = ({children, ...otherProps}) => {
    return ( 
        <Container {...otherProps}>{children}</Container>
     );
}
 
Feature.Title = function FeatureTitle({children, ...otherProps}) {
    return <Title {...otherProps}>{children}</Title>
}
Feature.SubTitle = function FeatureSubTitle({children, ...otherProps}) {
   return <SubTitle {...otherProps}>{children}</SubTitle>
}

export default Feature;