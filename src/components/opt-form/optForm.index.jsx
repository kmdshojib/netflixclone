import React from 'react';
import { Container,Input,Button,Text,Break,BigDisplay } from './styles/optForm.styles';

import  chevron from '../../assets/Image/icons/chevron-right.png';

const OptForm = ({children, ...otherProps}) => {
    return ( 
        <Container {...otherProps}>{children}</Container>
     );
}
 
OptForm.Input = function OptFormInput ({...otherProps}) {
    return ( 
        <Input {...otherProps} />
     );
}

OptForm.Button = function OptFormButton ({children, ...otherProps}) {
    return ( 
        <Button {...otherProps}>{children} <img src={chevron} alt="try now"/> </Button>
     );
}
OptForm.Text = function OptFormText ({children, ...otherProps}) {
    return ( 
        <Text {...otherProps}>{children}</Text>
     );
}
OptForm.Break = function OptFormBreak ({ ...otherProps}) {
    return ( 
        <Break {...otherProps} />
        )
}

OptForm.BigDisplay = function OptFormBigDisplay ({children, ...otherProps}) {
    return <BigDisplay {...otherProps}>{children}</BigDisplay>
}

export default OptForm;