import React,{useState,useContext,createContext} from 'react';
import { Container, Inner,Title,Frame,Item,Header,Body } from './styles/accordin.styles';

//images for Icon
import CloseButton from '../../assets/Image/icons/close-slim.png'
import AddButton from '../../assets/Image/icons/add.png'

const ToggleContext = createContext();

const Accordion = ({children, ...otherProps}) => {
    return ( 
        <Container {...otherProps}>
            <Inner>{children}</Inner>
        </Container>
     );
}
 
Accordion.Title = function AccordionTitle({children, ...otherProps}) {
    return ( 
        <Title {...otherProps}>{children}</Title>
     );
}

Accordion.Frame = function AccordionFrame({children, ...otherProps}) {
    return ( 
        <Frame {...otherProps}>{children}</Frame>
     );
}
Accordion.Item = function AccordionItem({children, ...otherProps}) {
    const [toggleShow, setToggleShow] = useState(false);
    return ( 
        <ToggleContext.Provider value={{toggleShow, setToggleShow}}>
            <Item {...otherProps}>{children}</Item>
        </ToggleContext.Provider>
     );
}
Accordion.Header = function AccordionHeader({children, ...otherProps}) {
    const {toggleShow, setToggleShow} = useContext(ToggleContext);
    return ( 
        <Header 
        onClick={()=> setToggleShow((toggleShow)=> !toggleShow )} 
        {...otherProps}
        >
        {children}
        {toggleShow ? (
          
                <img src={CloseButton}  alt="Close"/>
           
            
        ) : (
          
                <img src={AddButton}  alt="Add"/>
         
        )}
        </Header>
     );
}

Accordion.Body = function AccordionBody({children, ...otherProps}) {
    const {toggleShow} = useContext(ToggleContext);
    return ( 
        // toggleShow ? <Body {...otherProps}>{children}</Body>  : null
        <Body className={toggleShow ? 'open' : 'closed'} {...otherProps}>
            <span>{children}</span>
       </Body>
     );
}

export default Accordion;