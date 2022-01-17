import React from 'react';

import JumboContainer from '../components/jumbotron/jumbotron.component'
import FooterContainer from '../components/footer/footer.component'
import FaqsContainer from '../components/accordion/faqs.component'
import HeaderContainer from '../components/header/header.component'
import OptForm from '../components/opt-form/optForm.index'
import Feature from '../components/feature/feature.index'

class Home extends React.Component {
    render() { 
        return( 
            <div>
                <HeaderContainer>
                    <Feature>
                        <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
                        <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
                        <OptForm>
                        <OptForm.BigDisplay>
                            <OptForm.Input placeholder="Email Address" />
                            <OptForm.Button>Get Started</OptForm.Button>
                        </OptForm.BigDisplay>
                            <OptForm.Text>Ready to watch? Enter your Email address to restart your membership.</OptForm.Text> 
                        </OptForm>
                    </Feature>
                </HeaderContainer>  
                    
                <JumboContainer />
                <FaqsContainer />
                <FooterContainer />
              
            </div>
        )
    }
}
 
export default Home;

