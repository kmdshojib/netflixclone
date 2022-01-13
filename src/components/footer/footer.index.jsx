import React from 'react';
import { 
    Container,
    Column,
    Row,
    Break,
    Text,
    Link,
    Title
} from './styles/footer.styles';

const Footer = ({children,...otherProps}) => {

    return ( 
        <Container {...otherProps}>{children}</Container>
     );
}

Footer.Row = function FooterRow ({children, ...otherProps}){
    return (
        <Row {...otherProps}> {children}</Row>
    )
}
Footer.Column = function FooterColumn ({children, ...otherProps}){
    return (
        <Column {...otherProps}> {children}</Column>
    )
}
Footer.Link = function FooterLink ({children, ...otherProps}){
    return (
        <Link {...otherProps}> {children}</Link>
    )
}
Footer.Break = function FooterBreak ({children, ...otherProps}){
    return (
        <Break {...otherProps}> {children}</Break>
    )
}
Footer.Text = function FooterText ({children, ...otherProps}){
    return (
        <Text {...otherProps}> {children}</Text>
    )
}
Footer.Title = function FooterTitle ({children, ...otherProps}){
    return (
        <Title {...otherProps}> {children}</Title>
    )
}
 
export default Footer;