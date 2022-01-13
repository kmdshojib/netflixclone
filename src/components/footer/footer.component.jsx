import React from 'react';

import Footer from './footer.index';


const FooterContainer = () => {
    
    return ( 
        <Footer>
            <Footer.Title>Question? Contact us.</Footer.Title>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link>FAQ</Footer.Link>
                    <Footer.Link>Investor Relations</Footer.Link>
                    <Footer.Link>Privacy</Footer.Link>
                    <Footer.Link>Speed Test</Footer.Link>
                   
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link>Help Center</Footer.Link>
                    <Footer.Link>Jobs</Footer.Link>
                    <Footer.Link>Cookie Preferences</Footer.Link>
                    <Footer.Link>Legal Notices</Footer.Link>
                </Footer.Column>

 
                <Footer.Column>
                    <Footer.Link>Accounts</Footer.Link>
                    <Footer.Link>Ways to Watchd</Footer.Link>
                    <Footer.Link>Corporate Information</Footer.Link>
                    <Footer.Link>Only on Netflix</Footer.Link>
                </Footer.Column>

        
 
                <Footer.Column>
                    <Footer.Link>Media Center</Footer.Link>
                    <Footer.Link>Terms of Use</Footer.Link>
                    <Footer.Link>Contact Us</Footer.Link>
                </Footer.Column>
               
            </Footer.Row>
            <Footer.Break />
            <Footer.Text>Netflix United States</Footer.Text>
        </Footer>
     );
}
 
export default FooterContainer;