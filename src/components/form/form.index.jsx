import React from 'react';

import {
    Container, 
    Title,
    Error,
    Text, 
    SmallText,
    Base,
    Link,
    Input,
    Submit
} from './styles/form.styles'

const Form = ({children, ...otherProps}) => {
    return ( 
        <Container {...otherProps}>{children}</Container>
     );
}

Form.Title = function FormTitle({children, ...otherProps}){
    return (
        <Title {...otherProps}>{children}</Title>
    )
}
 
Form.Error = function FormError({children, ...otherProps}){
    return (
        <Error {...otherProps}>{children}</Error>
    )
}
 
Form.Text = function FormText({children, ...otherProps}){
    return (
        <Text {...otherProps}>{children}</Text>
    )
}
 

 
Form.SmallText = function FormSmallText({children, ...otherProps}){
    return (
        <SmallText {...otherProps}>{children}</SmallText>
    )
}
Form.Base = function FormBase({children, ...otherProps}){
    return (
        <Base {...otherProps}>{children}</Base>
    )
}
 
Form.Link = function FormLink({children, ...otherProps}){
    return (
        <Link {...otherProps}>{children}</Link>
    )
}
 
Form.Input = function FormInput({children, ...otherProps}){
    return (
        <Input {...otherProps}>{children}</Input>
    )
}
Form.Submit = function FormSubmit({children, ...otherProps}){
    return (
        <Submit {...otherProps}>{children}</Submit>
    )
}
 
export default Form;